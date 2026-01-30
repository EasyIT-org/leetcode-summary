# 810. Chalkboard XOR Game

- Difficulty: Hard
- Topics: Array, Math, Bit Manipulation, Brainteaser, Game Theory
- Slug: chalkboard-xor-game
- Problem ID: 828

## Description
You are given an array of integers nums represents the numbers written on a chalkboard.
Alice and Bob take turns erasing exactly one number from the chalkboard, with Alice starting first. If erasing a number causes the bitwise XOR of all the elements of the chalkboard to become 0, then that player loses. The bitwise XOR of one element is that element itself, and the bitwise XOR of no elements is 0.
Also, if any player starts their turn with the bitwise XOR of all the elements of the chalkboard equal to 0, then that player wins.
Return true if and only if Alice wins the game, assuming both players play optimally.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,1,2]
Output: false
Explanation: 
Alice has two choices: erase 1 or erase 2. 
If she erases 1, the nums array becomes [1, 2]. The bitwise XOR of all the elements of the chalkboard is 1 XOR 2 = 3. Now Bob can remove any element he wants, because Alice will be the one to erase the last element and she will lose. 
If Alice erases 2 first, now nums become [1, 1]. The bitwise XOR of all the elements of the chalkboard is 1 XOR 1 = 0. Alice will lose.
```

### Example 2
```text
Input: nums = [0,1]
Output: true
```

### Example 3
```text
Input: nums = [1,2,3]
Output: true
```


## Constraints
- 1 <= nums.length <= 1000
- 0 <= nums[i] < 216

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool xorGame(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public boolean xorGame(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def xorGame(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def xorGame(self, nums: List[int]) -> bool:
```

### c
```c
bool xorGame(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool XorGame(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var xorGame = function(nums) {
    
};
```

### typescript
```typescript
function xorGame(nums: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function xorGame($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func xorGame(_ nums: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun xorGame(nums: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool xorGame(List<int> nums) {
    
  }
}
```

### golang
```golang
func xorGame(nums []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Boolean}
def xor_game(nums)
    
end
```

### scala
```scala
object Solution {
    def xorGame(nums: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn xor_game(nums: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (xor-game nums)
  (-> (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec xor_game(Nums :: [integer()]) -> boolean().
xor_game(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec xor_game(nums :: [integer]) :: boolean
  def xor_game(nums) do
    
  end
end
```
