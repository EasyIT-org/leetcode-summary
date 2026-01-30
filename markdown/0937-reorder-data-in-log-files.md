# 937. Reorder Data in Log Files

- Difficulty: Medium
- Topics: Array, String, Sorting
- Slug: reorder-data-in-log-files
- Problem ID: 974

## Description
You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.
There are two types of logs:
Reorder these logs so that:
Return the final order of the logs.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
Explanation:
The letter-log contents are all different, so their ordering is "art can", "art zero", "own kit dig".
The digit-logs have a relative order of "dig1 8 1 5 1", "dig2 3 6".
```

### Example 2
```text
Input: logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
```


## Constraints
- 1 <= logs.length <= 100
- 3 <= logs[i].length <= 100
- All the tokens of logs[i] are separated by a single space.
- logs[i] is guaranteed to have an identifier and at least one word after the identifier.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> reorderLogFiles(vector<string>& logs) {
        
    }
};
```

### java
```java
class Solution {
    public String[] reorderLogFiles(String[] logs) {
        
    }
}
```

### python
```python
class Solution(object):
    def reorderLogFiles(self, logs):
        """
        :type logs: List[str]
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** reorderLogFiles(char** logs, int logsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public string[] ReorderLogFiles(string[] logs) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    
};
```

### typescript
```typescript
function reorderLogFiles(logs: string[]): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $logs
     * @return String[]
     */
    function reorderLogFiles($logs) {
        
    }
}
```

### swift
```swift
class Solution {
    func reorderLogFiles(_ logs: [String]) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun reorderLogFiles(logs: Array<String>): Array<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> reorderLogFiles(List<String> logs) {
    
  }
}
```

### golang
```golang
func reorderLogFiles(logs []string) []string {
    
}
```

### ruby
```ruby
# @param {String[]} logs
# @return {String[]}
def reorder_log_files(logs)
    
end
```

### scala
```scala
object Solution {
    def reorderLogFiles(logs: Array[String]): Array[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn reorder_log_files(logs: Vec<String>) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (reorder-log-files logs)
  (-> (listof string?) (listof string?))
  )
```

### erlang
```erlang
-spec reorder_log_files(Logs :: [unicode:unicode_binary()]) -> [unicode:unicode_binary()].
reorder_log_files(Logs) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec reorder_log_files(logs :: [String.t]) :: [String.t]
  def reorder_log_files(logs) do
    
  end
end
```
