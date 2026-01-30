# 455. Assign Cookies

- Difficulty: Easy
- Topics: Array, Two Pointers, Greedy, Sorting
- Slug: assign-cookies
- Problem ID: 455

## Description
Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.
Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.
Example 1:
Example 2:
Constraints:
Note: This question is the same as  2410: Maximum Matching of Players With Trainers.

## Examples
### Example 1
```text
Input: g = [1,2,3], s = [1,1]
Output: 1
Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
You need to output 1.
```

### Example 2
```text
Input: g = [1,2], s = [1,2,3]
Output: 2
Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. 
You have 3 cookies and their sizes are big enough to gratify all of the children, 
You need to output 2.
```


## Constraints
- 1 <= g.length <= 3 * 104
- 0 <= s.length <= 3 * 104
- 1 <= g[i], s[j] <= 231 - 1

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findContentChildren(vector<int>& g, vector<int>& s) {
        
    }
};
```

### java
```java
class Solution {
    public int findContentChildren(int[] g, int[] s) {
        
    }
}
```

### python
```python
class Solution(object):
    def findContentChildren(self, g, s):
        """
        :type g: List[int]
        :type s: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
```

### c
```c
int findContentChildren(int* g, int gSize, int* s, int sSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindContentChildren(int[] g, int[] s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    
};
```

### typescript
```typescript
function findContentChildren(g: number[], s: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $g
     * @param Integer[] $s
     * @return Integer
     */
    function findContentChildren($g, $s) {
        
    }
}
```

### swift
```swift
class Solution {
    func findContentChildren(_ g: [Int], _ s: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findContentChildren(g: IntArray, s: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findContentChildren(List<int> g, List<int> s) {
    
  }
}
```

### golang
```golang
func findContentChildren(g []int, s []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} g
# @param {Integer[]} s
# @return {Integer}
def find_content_children(g, s)
    
end
```

### scala
```scala
object Solution {
    def findContentChildren(g: Array[Int], s: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_content_children(g: Vec<i32>, s: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-content-children g s)
  (-> (listof exact-integer?) (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec find_content_children(G :: [integer()], S :: [integer()]) -> integer().
find_content_children(G, S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_content_children(g :: [integer], s :: [integer]) :: integer
  def find_content_children(g, s) do
    
  end
end
```
