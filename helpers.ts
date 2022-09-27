export const shortenAddress = (str: any) => {
  return str.substring(0, 4) + '...' + str.substring(str.length - 4)
}

export const shortenDescription = (str: any) => {
  if (str.length < 180) {
    return str
  } else {
    return str.substring(0, 150) + '.....'
  }
}

export const validateAddress = (input: string) => {
  const prefix = input.slice(0, 2)
  if (input.length === 42 && prefix === '0x') {
    return true
  }
  return false
}

export const wordArrayToByteArray = (wordArray: any, length: any) => {
  let words: any = wordArray
  if (
    wordArray.hasOwnProperty('sigBytes') &&
    wordArray.hasOwnProperty('words')
  ) {
    length = wordArray.sigBytes
    words = wordArray.words
  }

  let result: number[] = []
  let bytesAdded
  let i = 0
  while (length > 0) {
    bytesAdded = wordToByteArray(result, words[i], Math.min(4, length))
    length -= bytesAdded
    i++
  }
  return new Uint8Array(result)
}

export const wordToByteArray = (result: any, word: any, length: any) => {
  const lengthBefore = result.length
  const xff = 0xff
  if (length > 0) result.push(word >>> 24)
  if (length > 1) result.push((word >>> 16) & xff)
  if (length > 2) result.push((word >>> 8) & xff)
  if (length > 3) result.push(word & xff)
  return result.length - lengthBefore
}
