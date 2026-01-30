# 1024. Video Stitching

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Greedy
- Slug: video-stitching
- Problem ID: 1081

## Description
You are given a series of video clips from a sporting event that lasted time seconds. These video clips can be overlapping with each other and have varying lengths.
Each video clip is described by an array clips where clips[i] = [starti, endi] indicates that the ith clip started at starti and ended at endi.
We can cut these clips into segments freely.
Return the minimum number of clips needed so that we can cut the clips into segments that cover the entire sporting event [0, time]. If the task is impossible, return -1.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: clips = [[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], time = 10
Output: 3
Explanation: We take the clips [0,2], [8,10], [1,9]; a total of 3 clips.
Then, we can reconstruct the sporting event as follows:
We cut [1,9] into segments [1,2] + [2,8] + [8,9].
Now we have segments [0,2] + [2,8] + [8,10] which cover the sporting event [0, 10].
```

### Example 2
```text
Input: clips = [[0,1],[1,2]], time = 5
Output: -1
Explanation: We cannot cover [0,5] with only [0,1] and [1,2].
```

### Example 3
```text
Input: clips = [[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], time = 9
Output: 3
Explanation: We can take clips [0,4], [4,7], and [6,9].
```


## Constraints
- 1 <= clips.length <= 100
- 0 <= starti <= endi <= 100
- 1 <= time <= 100

## Hints
- What if we sort the intervals?  Considering the sorted intervals, how can we solve the problem with dynamic programming?
- Let's consider a DP(pos, limit) where pos represents the position of the current interval we are gonna take the decision and limit is the current covered area from [0 - limit]. This DP returns the minimum number of taken intervals or infinite if it's not possible to cover the [0 - T] section.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int videoStitching(vector<vector<int>>& clips, int time) {
        
    }
};
```

### java
```java
class Solution {
    public int videoStitching(int[][] clips, int time) {
        
    }
}
```

### python
```python
class Solution(object):
    def videoStitching(self, clips, time):
        """
        :type clips: List[List[int]]
        :type time: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def videoStitching(self, clips: List[List[int]], time: int) -> int:
```

### c
```c
int videoStitching(int** clips, int clipsSize, int* clipsColSize, int time) {
    
}
```

### csharp
```csharp
public class Solution {
    public int VideoStitching(int[][] clips, int time) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function(clips, time) {
    
};
```

### typescript
```typescript
function videoStitching(clips: number[][], time: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $clips
     * @param Integer $time
     * @return Integer
     */
    function videoStitching($clips, $time) {
        
    }
}
```

### swift
```swift
class Solution {
    func videoStitching(_ clips: [[Int]], _ time: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun videoStitching(clips: Array<IntArray>, time: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int videoStitching(List<List<int>> clips, int time) {
    
  }
}
```

### golang
```golang
func videoStitching(clips [][]int, time int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} clips
# @param {Integer} time
# @return {Integer}
def video_stitching(clips, time)
    
end
```

### scala
```scala
object Solution {
    def videoStitching(clips: Array[Array[Int]], time: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn video_stitching(clips: Vec<Vec<i32>>, time: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (video-stitching clips time)
  (-> (listof (listof exact-integer?)) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec video_stitching(Clips :: [[integer()]], Time :: integer()) -> integer().
video_stitching(Clips, Time) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec video_stitching(clips :: [[integer]], time :: integer) :: integer
  def video_stitching(clips, time) do
    
  end
end
```
