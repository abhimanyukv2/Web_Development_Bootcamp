class Solution:
    def merge(self, nums1: list[int], m: int, nums2: list[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        arr = []
        z = True
        i = 0
        j = 0
        while z:
            if nums1[i] == 0 and i != m:
                i = i + 1
            elif nums2[j] == 0 and j != n:
                j = j + 1
            elif nums1[i] < nums2[j]:
                arr.append(nums1[i])
                i = i + 1
            elif nums1[i] > nums2[j]:
                arr.append(nums2[j])
                j = j + 1
            elif nums1[i] == nums2[j]:
                arr.append(nums1[i])
                arr.append(nums2[j])
                i = i + 1
                j = j + 1
            if i == m and j == n:
                z = False
                break
                
        nums1.clear()
        nums1 = arr

ob = Solution()
ob.merge([1,2,3,0,0,0],3,[2,5,6],3)