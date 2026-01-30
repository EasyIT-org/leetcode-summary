# 621. Task Scheduler

- Difficulty: Medium
- Topics: Array, Hash Table, Greedy, Sorting, Heap (Priority Queue), Counting
- Slug: task-scheduler
- Problem ID: 621

## Description
You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. Each CPU interval can be idle or allow the completion of one task. Tasks can be completed in any order, but there's a constraint: there has to be a gap of at least n intervals between two tasks with the same label.
Return the minimum number of CPU intervals required to complete all tasks.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
After completing task A, you must wait two intervals before doing A again. The same applies to task B. In the 3 rd interval, neither A nor B can be done, so you idle. By the 4 th interval, you can do A again as 2 intervals have passed.
```

### Example 2
```text
Input: tasks = ["A","C","A","B","D","B"], n = 1
Output: 6
Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.
With a cooling interval of 1, you can repeat a task after just one other task.
```

### Example 3
```text
Input: tasks = ["A","A","A", "B","B","B"], n = 3
Output: 10
Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.
There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.
```


## Constraints
- 1 <= tasks.length <= 104
- tasks[i] is an uppercase English letter.
- 0 <= n <= 100

## Hints
- There are many different solutions for this problem, including a greedy algorithm.
- For every cycle, find the most frequent letter that can be placed in this cycle. After placing, decrease the frequency of that letter by one.
- Use Priority Queue.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int leastInterval(vector<char>& tasks, int n) {
        
    }
};
```

### java
```java
class Solution {
    public int leastInterval(char[] tasks, int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def leastInterval(self, tasks, n):
        """
        :type tasks: List[str]
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
```

### c
```c
int leastInterval(char* tasks, int tasksSize, int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LeastInterval(char[] tasks, int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    
};
```

### typescript
```typescript
function leastInterval(tasks: string[], n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $tasks
     * @param Integer $n
     * @return Integer
     */
    function leastInterval($tasks, $n) {
        
    }
}
```

### swift
```swift
class Solution {
    func leastInterval(_ tasks: [Character], _ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun leastInterval(tasks: CharArray, n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int leastInterval(List<String> tasks, int n) {
    
  }
}
```

### golang
```golang
func leastInterval(tasks []byte, n int) int {
    
}
```

### ruby
```ruby
# @param {Character[]} tasks
# @param {Integer} n
# @return {Integer}
def least_interval(tasks, n)
    
end
```

### scala
```scala
object Solution {
    def leastInterval(tasks: Array[Char], n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn least_interval(tasks: Vec<char>, n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (least-interval tasks n)
  (-> (listof char?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec least_interval(Tasks :: [char()], N :: integer()) -> integer().
least_interval(Tasks, N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec least_interval(tasks :: [char], n :: integer) :: integer
  def least_interval(tasks, n) do
    
  end
end
```
