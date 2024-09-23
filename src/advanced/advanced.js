const nums = [1, 10, 3, 9, 4, 8, 5, 7, 6, 2, -5, -2, -4, -9] // eslint-disable-line no-unused-vars

// 1. Check if the array contains the value 10
let hasTen = false
let indexOfTen = -1

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 10) {
    hasTen = true
    indexOfTen = i
    break
  }
}

// 2. Count how many numbers in the array are divisible by 3
let divisibleByThreeCount = 0

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 3 === 0) {
    divisibleByThreeCount++
  }
}

// 3. Find the average of the numbers in the array
let sum = 0

for (let i = 0; i < nums.length; i++) {
  sum += nums[i]
}

const average = sum / nums.length

// 4. Find the largest number in the array
let largest = nums[0]

for (let i = 1; i < nums.length; i++) {
  if (nums[i] > largest) {
    largest = nums[i]
  }
}

// 5. Find the smallest number in the array
let smallest = nums[0]

for (let i = 1; i < nums.length; i++) {
  if (nums[i] < smallest) {
    smallest = nums[i]
  }
}

// 6. Find the median of the numbers in the array
const sortedNums = nums.slice().sort((a, b) => a - b)
const midIndex = Math.floor(sortedNums.length / 2)

let median
if (sortedNums.length % 2 === 0) {
  median = (sortedNums[midIndex - 1] + sortedNums[midIndex]) / 2
} else {
  median = sortedNums[midIndex]
}

module.exports = {
  hasTen,
  indexOfTen,
  divisibleByThreeCount,
  average,
  largest,
  smallest,
  median
}
