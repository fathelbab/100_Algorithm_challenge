 numbersArray = [1,2,3,4,5,6,7,8,9]


def find_sum(numbersArray, numberOfItems)
    temp_number = 0;
    for value in numbersArray
        temp_number = temp_number + value
    end
    return temp_number;
end

puts find_sum(numbersArray, 9)