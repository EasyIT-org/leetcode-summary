# 825. Friends Of Appropriate Ages

- Difficulty: Medium
- Topics: Array, Two Pointers, Binary Search, Sorting
- Slug: friends-of-appropriate-ages
- Problem ID: 852

## Description
There are n persons on a social media website. You are given an integer array ages where ages[i] is the age of the ith person.
A Person x will not send a friend request to a person y (x != y) if any of the following conditions is true:
Otherwise, x will send a friend request to y.
Note that if x sends a request to y, y will not necessarily send a request to x. Also, a person will not send a friend request to themself.
Return the total number of friend requests made.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: ages = [16,16]
Output: 2
Explanation: 2 people friend request each other.
```

### Example 2
```text
Input: ages = [16,17,18]
Output: 2
Explanation: Friend requests are made 17 -> 16, 18 -> 17.
```

### Example 3
```text
Input: ages = [20,30,100,110,120]
Output: 3
Explanation: Friend requests are made 110 -> 100, 120 -> 110, 120 -> 100.
```


## Constraints
- n == ages.length
- 1 <= n <= 2 * 104
- 1 <= ages[i] <= 120

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numFriendRequests(vector<int>& ages) {
        
    }
};
```

### java
```java
class Solution {
    public int numFriendRequests(int[] ages) {
        
    }
}
```

### python
```python
class Solution(object):
    def numFriendRequests(self, ages):
        """
        :type ages: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numFriendRequests(self, ages: List[int]) -> int:
```

### c
```c
int numFriendRequests(int* ages, int agesSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumFriendRequests(int[] ages) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
    
};
```

### typescript
```typescript
function numFriendRequests(ages: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $ages
     * @return Integer
     */
    function numFriendRequests($ages) {
        
    }
}
```

### swift
```swift
class Solution {
    func numFriendRequests(_ ages: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numFriendRequests(ages: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numFriendRequests(List<int> ages) {
    
  }
}
```

### golang
```golang
func numFriendRequests(ages []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} ages
# @return {Integer}
def num_friend_requests(ages)
    
end
```

### scala
```scala
object Solution {
    def numFriendRequests(ages: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_friend_requests(ages: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-friend-requests ages)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec num_friend_requests(Ages :: [integer()]) -> integer().
num_friend_requests(Ages) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_friend_requests(ages :: [integer]) :: integer
  def num_friend_requests(ages) do
    
  end
end
```
