def persistence(n):

    if n < 10:
        return 0

    count = 0
    while True:
        nums = [int(num) for num in str(n)]

        if len(nums) == 1:
            return count

        multiplication = nums[0]
        for num in nums[1:]:
            multiplication *= num

        n = multiplication
        count += 1
