import type { NextPage } from 'next'
import Image from 'next/image'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Login from '../../components/Login'
import { create } from 'ipfs-http-client'
import sha256 from 'crypto-js/sha256'
import CryptoJS from 'crypto-js'
import { wordArrayToByteArray, wordToByteArray } from '../../helpers'

const projectId = process.env.INFURA_PROJECTID
const projectSecret = process.env.INFURA_PROJECTSECRET
const auth =
  'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')

const client = create({
  host: 'ipfs.infura.io',
  protocol: 'https',
  port: 5001,
  headers: {
    authorization: auth,
  },
})

const BUCKET_URL =
  'https://fleming-clinical-trial.s3.ap-southeast-1.amazonaws.com/'

const Join: NextPage = ({ hasReadPermission }: any) => {
  const router = useRouter()
  const [imageHash, setImageHash] = useState('')
  const [selectedFile, setSelectedFile] = useState<any>()
  const [preview, setPreview] = useState()
  const [decryptedPreview, setDecryptedPreview] = useState<any>()

  // upload to amazon s3 bucket
  const [uploadingStatus, setUploadingStatus] = useState<any>()
  const [uploadedFile, setUploadedFile] = useState<any>()

  const onFileSelection = async (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setSelectedFile(e.target.files[0])

    // 1. Hash image file
    const hash = await sha256(e.target.files[0]).toString()
    setImageHash(hash)
    // console.log('image hash: ', hash)

    // 2. Encrypt image
    // mc: Referencing: https://betterprogramming.pub/exchanging-encrypted-data-on-blockchain-using-metamask-a2e65a9a896c
    // mc: We want to encrypt with users publicKey which can be
    // obtained from metamask via: https://docs.metamask.io/guide/rpc-api.html#eth-getencryptionpublickey
    // eth_getEncryptionPublicKey
    // but we have issue that it's not available in Metamask mobile and I don't know if it's
    // available via fortmatic/MagicLink
    const imageBuffer = await e.target.files[0].arrayBuffer()
    console.log('array buffer:', imageBuffer)

    const wordArray = CryptoJS.lib.WordArray.create(imageBuffer)
    console.log('word array:', wordArray)

    const imageStr = CryptoJS.enc.Hex.stringify(wordArray)
    const encrypted = CryptoJS.AES.encrypt(imageStr, 'secret')
    console.log('encrypted: ', encrypted)

    // 3. Upload encrypted image data to IPFS
    // const buffer = Buffer.from(encrypted)
    try {
      const { cid } = await client.add({ content: JSON.stringify(encrypted) })
      console.log('uploaded image to ipfs: ', cid)
    } catch (error: any) {
      console.log('error uploading data:', error)
    }

    // 4. Retrieve encrypted image data from IPFS

    // 5. Decrypt image data
    // mc: we can use metamask to decrypt: https://docs.metamask.io/guide/rpc-api.html#eth-decrypt
    // eth_decrypt

    const decrypted = CryptoJS.AES.decrypt(encrypted, 'secret')
    const decryptedStr = decrypted.toString(CryptoJS.enc.Utf8)
    const decryptedWordArray = CryptoJS.enc.Hex.parse(decryptedStr)
    console.log('decryptedWordArray: ', decryptedWordArray)

    const decryptedArrayBuffer = wordArrayToByteArray(
      decryptedWordArray,
      decryptedWordArray.words.length
    )
    console.log('decryptedText: ', decryptedArrayBuffer)
    var blob = new Blob([decryptedArrayBuffer], { type: 'image/jpeg' })
    var urlCreator = window.URL || window.webkitURL
    var imageUrl = urlCreator.createObjectURL(blob)
    setDecryptedPreview(imageUrl)
  }

  const uploadFile = async () => {
    setUploadingStatus('Uploading the file to AWS S3')

    let { data } = await axios.post('/api/s3/uploadFile', {
      name: selectedFile.name,
      type: selectedFile.type,
    })

    console.log(data)

    const url = data.url
    let { data: newData } = await axios.put(url, selectedFile, {
      headers: {
        'Content-type': selectedFile.type,
        'Access-Control-Allow-Origin': '*',
      },
    })

    setUploadedFile(BUCKET_URL + selectedFile.name)
    setSelectedFile(null)
  }

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }
    const objectUrl: any = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />
  }

  return (
    <div className="flex justify-center space-x-20">
      <div>
        {preview ? (
          <div className="flex justify-center">
            <label className="mt-2">
              <Image
                src={preview}
                width="250x"
                height="250x"
                alt="profile"
                className="block hover:opacity-75 cursor-pointer"
              />
              <input
                type="file"
                accept=".jpeg,.jpg,.png,.gif"
                onChange={onFileSelection}
                className="hidden"
              />
            </label>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full mt-2">
            <label className="flex flex-col border-2 border-black border-dashed w-full h-40 group">
              <div className="flex flex-col items-center justify-center p-10 cursor-pointer">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="rgb(20 20 20)"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <code className="pt-2">select photo</code>
              </div>
              <input
                type="file"
                className="hidden"
                accept=".jpeg,.jpg,.png,.gif"
                onChange={onFileSelection}
              />
            </label>
          </div>
        )}
        <div className="flex justify-center my-16">
          <button
            className="shadow-solid-black text-xl text-slate-900 py-2 px-3 bg-lightpurple font-semibold border-2 border-black hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none"
            type="submit"
            onClick={uploadFile}
          >
            Submit
          </button>
        </div>
        <label>Decrypted Preview:</label>
        {decryptedPreview && (
          <div className="flex justify-center">
            <label className="mt-2">
              <Image
                src={decryptedPreview}
                width="250x"
                height="250x"
                alt="profile"
                className="block hover:opacity-75 cursor-pointer"
              />
            </label>
          </div>
        )}
      </div>
    </div>
  )
}

export default Join
