nums1 = [1, 2, 2, 1]
nums2 = [2, 3]

var intersection = function (nums1, nums2) {
    return [...new Set(nums1)].filter(n => new Set(nums2.has(n)));
}