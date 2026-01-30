# 806. Number of Lines To Write String

- Difficulty: Easy
- Topics: Array, String
- Slug: number-of-lines-to-write-string
- Problem ID: 824

## Description
You are given a string s of lowercase English letters and an array widths denoting how many pixels wide each lowercase English letter is. Specifically, widths[0] is the width of 'a', widths[1] is the width of 'b', and so on.
You are trying to write s across several lines, where each line is no longer than 100 pixels. Starting at the beginning of s, write as many letters on the first line such that the total width does not exceed 100 pixels. Then, from where you stopped in s, continue writing as many letters as you can on the second line. Continue this process until you have written all of s.
Return an array result of length 2 where:
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "abcdefghijklmnopqrstuvwxyz"
Output: [3,60]
Explanation: You can write s as follows:
abcdefghij  // 100 pixels wide
klmnopqrst  // 100 pixels wide
uvwxyz      // 60 pixels wide
There are a total of 3 lines, and the last line is 60 pixels wide.
```

### Example 2
```text
Input: widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "bbbcccdddaaa"
Output: [2,4]
Explanation: You can write s as follows:
bbbcccdddaa  // 98 pixels wide
a            // 4 pixels wide
There are a total of 2 lines, and the last line is 4 pixels wide.
```


## Constraints
- widths.length == 26
- 2 <= widths[i] <= 10
- 1 <= s.length <= 1000
- s contains only lowercase English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> numberOfLines(vector<int>& widths, string s) {
        
    }
};
```

### java
```java
class Solution {
    public int[] numberOfLines(int[] widths, String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def numberOfLines(self, widths, s):
        """
        :type widths: List[int]
        :type s: str
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def numberOfLines(self, widths: List[int], s: str) -> List[int]:
```

### c
```c


/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* numberOfLines(int* widths, int widthsSize, char * s, int* returnSize){

}
```

### csharp
```csharp
public class Solution {
    public int[] NumberOfLines(int[] widths, string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    
};
```

### typescript
```typescript
function numberOfLines(widths: number[], s: string): number[] {

};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $widths
     * @param String $s
     * @return Integer[]
     */
    function numberOfLines($widths, $s) {
        
    }
}
```

### swift
```swift
class Solution {
    func numberOfLines(_ widths: [Int], _ s: String) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numberOfLines(widths: IntArray, s: String): IntArray {
        
    }
}
```

### golang
```golang
func numberOfLines(widths []int, s string) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} widths
# @param {String} s
# @return {Integer[]}
def number_of_lines(widths, s)
    
end
```

### scala
```scala
object Solution {
    def numberOfLines(widths: Array[Int], s: String): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn number_of_lines(widths: Vec<i32>, s: String) -> Vec<i32> {
        
    }
}
```
