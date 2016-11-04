// export const isHighScore = (scores, time) => time.split(':').join('') < state.N3.map(score => score.time.split(':').join('')).sort((a, b) => b - a)[0]
export const isHighScore = (scores, time) => {
  const cleanTime = (time) => time.split(':').join('')
  let slowestTime = scores
    .map(score => cleanTime(score.time))
    .sort((a, b) => b - a)[0]

    if(cleanTime(time) < slowestTime) {
      return true
    } else {
      return false
    }

}

// merges two sorted arrays and returns inversion count in the arrays.
const merge = (arr, temp, left, mid, right) => {
  // start index for left subarray
  let i = left
  // start index for right subarray
  let j = mid
  // start index for merged array
  let k = left
  let invCount = 0

  while ((i <= mid - 1) && (j <= right)) {
    if (arr[i] <= arr[j]) {
      temp[k] = arr[i]
      i += 1
    } else {
      temp[k] = arr[j]
      j += 1
      invCount += (mid - i)
    }
    k += 1
  }

  // Copy the remaining elements of left subarray (if there are any) to temp
  while (i <= mid - 1) {
    temp[k] = arr[i]
    i += 1
    k += 1
  }

  // Copy the remaining elements of right subarray (if there are any) to temp
  while (j <= right) {
    temp[k] = arr[j]
    j += 1
    k += 1
  }

  // Copy back the merged elements to original array
  for (i = left; i <= right; i += 1) {
    arr[i] = temp[i]
  }

  return invCount
}

// The recursive routine that calls itself on left part then right part and the calls merge on both.
const mergeAndCount = (arr, temp, left, right) => {
  let mid = 0
  let invCount = 0
  if (right > left) {
    // Divide the array into two parts and call mergeAndCountAndCountInv() for each of the parts
    mid = Math.floor((right + left) / 2)

    // Inversion count will be sum of inversions in left-part, right-part and number of inversions in merging
    invCount = mergeAndCount(arr, temp, left, mid)
    invCount += mergeAndCount(arr, temp, mid + 1, right)

    // Merge the two parts
    invCount += merge(arr, temp, left, mid + 1, right)
  }
  return invCount
}

// takes in an array of objects/numbers and returns the number of inversions in it.
export const inversionCount = (array) => {
  if (!array || array.length === 0 || array.length === 1) {
    return 0
  }
  return mergeAndCount(array, new Array(array.length), 0, array.length - 1)
}


// A linear time array randomizer
export const shuffle = (array) => {
  let m = array.length
  let t
  let i

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m)
    m -= 1

    // And swap it with the current element.
    t = array[m]
    array[m] = array[i]
    array[i] = t
  }

  return array
}
