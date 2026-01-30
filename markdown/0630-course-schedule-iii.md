# 630. Course Schedule III

- Difficulty: Hard
- Topics: Array, Greedy, Sorting, Heap (Priority Queue)
- Slug: course-schedule-iii
- Problem ID: 630

## Description
There are n different online courses numbered from 1 to n. You are given an array courses where courses[i] = [durationi, lastDayi] indicate that the ith course should be taken continuously for durationi days and must be finished before or on lastDayi.
You will start on the 1st day and you cannot take two or more courses simultaneously.
Return the maximum number of courses that you can take.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]
Output: 3
Explanation: 
There are totally 4 courses, but you can take 3 courses at most:
First, take the 1st course, it costs 100 days so you will finish it on the 100th day, and ready to take the next course on the 101st day.
Second, take the 3rd course, it costs 1000 days so you will finish it on the 1100th day, and ready to take the next course on the 1101st day. 
Third, take the 2nd course, it costs 200 days so you will finish it on the 1300th day. 
The 4th course cannot be taken now, since you will finish it on the 3300th day, which exceeds the closed date.
```

### Example 2
```text
Input: courses = [[1,2]]
Output: 1
```

### Example 3
```text
Input: courses = [[3,2],[4,3]]
Output: 0
```


## Constraints
- 1 <= courses.length <= 104
- 1 <= durationi, lastDayi <= 104

## Hints
- During iteration, say I want to add the current course, currentTotalTime being total time of all courses taken till now, but adding the current course might exceed my deadline or it doesn’t.</br></br>

1. If it doesn’t, then I have added one new course. Increment the currentTotalTime with duration of current course.
- 2. If it exceeds deadline, I can swap current course with current courses that has biggest duration.</br>
* No harm done and I might have just reduced the currentTotalTime, right? </br>
* What preprocessing do I need to do on my course processing order so that this swap is always legal?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int scheduleCourse(vector<vector<int>>& courses) {
        
    }
};
```

### java
```java
class Solution {
    public int scheduleCourse(int[][] courses) {
        
    }
}
```

### python
```python
class Solution(object):
    def scheduleCourse(self, courses):
        """
        :type courses: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def scheduleCourse(self, courses: List[List[int]]) -> int:
```

### c
```c
int scheduleCourse(int** courses, int coursesSize, int* coursesColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int ScheduleCourse(int[][] courses) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function(courses) {
    
};
```

### typescript
```typescript
function scheduleCourse(courses: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $courses
     * @return Integer
     */
    function scheduleCourse($courses) {
        
    }
}
```

### swift
```swift
class Solution {
    func scheduleCourse(_ courses: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun scheduleCourse(courses: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int scheduleCourse(List<List<int>> courses) {
    
  }
}
```

### golang
```golang
func scheduleCourse(courses [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} courses
# @return {Integer}
def schedule_course(courses)
    
end
```

### scala
```scala
object Solution {
    def scheduleCourse(courses: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn schedule_course(courses: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (schedule-course courses)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec schedule_course(Courses :: [[integer()]]) -> integer().
schedule_course(Courses) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec schedule_course(courses :: [[integer]]) :: integer
  def schedule_course(courses) do
    
  end
end
```
