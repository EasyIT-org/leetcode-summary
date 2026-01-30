# 1105. Filling Bookcase Shelves

- Difficulty: Medium
- Topics: Array, Dynamic Programming
- Slug: filling-bookcase-shelves
- Problem ID: 1196

## Description
You are given an array books where books[i] = [thicknessi, heighti] indicates the thickness and height of the ith book. You are also given an integer shelfWidth.
We want to place these books in order onto bookcase shelves that have a total width shelfWidth.
We choose some of the books to place on this shelf such that the sum of their thickness is less than or equal to shelfWidth, then build another level of the shelf of the bookcase so that the total height of the bookcase has increased by the maximum height of the books we just put down. We repeat this process until there are no more books to place.
Note that at each step of the above process, the order of the books we place is the same order as the given sequence of books.
Return the minimum possible height that the total bookshelf can be after placing shelves in this manner.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: books = [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], shelfWidth = 4
Output: 6
Explanation:
The sum of the heights of the 3 shelves is 1 + 3 + 2 = 6.
Notice that book number 2 does not have to be on the first shelf.
```
Images:
- https://assets.leetcode.com/uploads/2019/06/24/shelves.png

### Example 2
```text
Input: books = [[1,3],[2,4],[3,2]], shelfWidth = 6
Output: 4
```
Images:
- https://assets.leetcode.com/uploads/2019/06/24/shelves.png


## Constraints
- 1 <= books.length <= 1000
- 1 <= thicknessi <= shelfWidth <= 1000
- 1 <= heighti <= 1000

## Hints
- Use dynamic programming:  dp(i) will be the answer to the problem for books[i:].

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minHeightShelves(vector<vector<int>>& books, int shelfWidth) {
        
    }
};
```

### java
```java
class Solution {
    public int minHeightShelves(int[][] books, int shelfWidth) {
        
    }
}
```

### python
```python
class Solution(object):
    def minHeightShelves(self, books, shelfWidth):
        """
        :type books: List[List[int]]
        :type shelfWidth: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minHeightShelves(self, books: List[List[int]], shelfWidth: int) -> int:
```

### c
```c
int minHeightShelves(int** books, int booksSize, int* booksColSize, int shelfWidth) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinHeightShelves(int[][] books, int shelfWidth) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, shelfWidth) {
    
};
```

### typescript
```typescript
function minHeightShelves(books: number[][], shelfWidth: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $books
     * @param Integer $shelfWidth
     * @return Integer
     */
    function minHeightShelves($books, $shelfWidth) {
        
    }
}
```

### swift
```swift
class Solution {
    func minHeightShelves(_ books: [[Int]], _ shelfWidth: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minHeightShelves(books: Array<IntArray>, shelfWidth: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minHeightShelves(List<List<int>> books, int shelfWidth) {
    
  }
}
```

### golang
```golang
func minHeightShelves(books [][]int, shelfWidth int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} books
# @param {Integer} shelf_width
# @return {Integer}
def min_height_shelves(books, shelf_width)
    
end
```

### scala
```scala
object Solution {
    def minHeightShelves(books: Array[Array[Int]], shelfWidth: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_height_shelves(books: Vec<Vec<i32>>, shelf_width: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-height-shelves books shelfWidth)
  (-> (listof (listof exact-integer?)) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec min_height_shelves(Books :: [[integer()]], ShelfWidth :: integer()) -> integer().
min_height_shelves(Books, ShelfWidth) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_height_shelves(books :: [[integer]], shelf_width :: integer) :: integer
  def min_height_shelves(books, shelf_width) do
    
  end
end
```
