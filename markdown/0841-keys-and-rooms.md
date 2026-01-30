# 841. Keys and Rooms

- Difficulty: Medium
- Topics: Depth-First Search, Breadth-First Search, Graph
- Slug: keys-and-rooms
- Problem ID: 871

## Description
There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.
When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.
Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: rooms = [[1],[2],[3],[]]
Output: true
Explanation: 
We visit room 0 and pick up key 1.
We then visit room 1 and pick up key 2.
We then visit room 2 and pick up key 3.
We then visit room 3.
Since we were able to visit every room, we return true.
```

### Example 2
```text
Input: rooms = [[1,3],[3,0,1],[2],[0]]
Output: false
Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.
```


## Constraints
- n == rooms.length
- 2 <= n <= 1000
- 0 <= rooms[i].length <= 1000
- 1 <= sum(rooms[i].length) <= 3000
- 0 <= rooms[i][j] < n
- All the values of rooms[i] are unique.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool canVisitAllRooms(vector<vector<int>>& rooms) {
        
    }
};
```

### java
```java
class Solution {
    public boolean canVisitAllRooms(List<List<Integer>> rooms) {
        
    }
}
```

### python
```python
class Solution(object):
    def canVisitAllRooms(self, rooms):
        """
        :type rooms: List[List[int]]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
```

### c
```c
bool canVisitAllRooms(int** rooms, int roomsSize, int* roomsColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool CanVisitAllRooms(IList<IList<int>> rooms) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    
};
```

### typescript
```typescript
function canVisitAllRooms(rooms: number[][]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $rooms
     * @return Boolean
     */
    function canVisitAllRooms($rooms) {
        
    }
}
```

### swift
```swift
class Solution {
    func canVisitAllRooms(_ rooms: [[Int]]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun canVisitAllRooms(rooms: List<List<Int>>): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool canVisitAllRooms(List<List<int>> rooms) {
    
  }
}
```

### golang
```golang
func canVisitAllRooms(rooms [][]int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[][]} rooms
# @return {Boolean}
def can_visit_all_rooms(rooms)
    
end
```

### scala
```scala
object Solution {
    def canVisitAllRooms(rooms: List[List[Int]]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn can_visit_all_rooms(rooms: Vec<Vec<i32>>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (can-visit-all-rooms rooms)
  (-> (listof (listof exact-integer?)) boolean?)
  )
```

### erlang
```erlang
-spec can_visit_all_rooms(Rooms :: [[integer()]]) -> boolean().
can_visit_all_rooms(Rooms) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec can_visit_all_rooms(rooms :: [[integer]]) :: boolean
  def can_visit_all_rooms(rooms) do
    
  end
end
```
