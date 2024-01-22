#example
# For a = [2, 4, 7] the output should be absoluteValuesSumMinimization(a) = 4.
# For a = [2, 4, 7, 6] the output should be absoluteValuesSumMinimization(a) = 4.

def  absoluteValuesSumMinimization(array)
    array.sort!
    if array.length % 2 == 0
        return array[array.length/2 - 1]
    else
        return array[array.length/2]
    end    
end

puts absoluteValuesSumMinimization([2, 4, 7,6])