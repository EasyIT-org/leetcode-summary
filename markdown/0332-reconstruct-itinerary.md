# 332. Reconstruct Itinerary

- Difficulty: Hard
- Topics: Depth-First Search, Graph, Eulerian Circuit
- Slug: reconstruct-itinerary
- Problem ID: 332

## Description
You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.
All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.
You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
Output: ["JFK","MUC","LHR","SFO","SJC"]
```
Images:
- https://assets.leetcode.com/uploads/2021/03/14/itinerary1-graph.jpg

### Example 2
```text
Input: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"] but it is larger in lexical order.
```
Images:
- https://assets.leetcode.com/uploads/2021/03/14/itinerary2-graph.jpg


## Constraints
- 1 <= tickets.length <= 300
- tickets[i].length == 2
- fromi.length == 3
- toi.length == 3
- fromi and toi consist of uppercase English letters.
- fromi != toi

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> findItinerary(vector<vector<string>>& tickets) {
        
    }
};
```

### java
```java
class Solution {
    public List<String> findItinerary(List<List<String>> tickets) {
        
    }
}
```

### python
```python
class Solution(object):
    def findItinerary(self, tickets):
        """
        :type tickets: List[List[str]]
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** findItinerary(char*** tickets, int ticketsSize, int* ticketsColSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<string> FindItinerary(IList<IList<string>> tickets) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    
};
```

### typescript
```typescript
function findItinerary(tickets: string[][]): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[][] $tickets
     * @return String[]
     */
    function findItinerary($tickets) {
        
    }
}
```

### swift
```swift
class Solution {
    func findItinerary(_ tickets: [[String]]) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findItinerary(tickets: List<List<String>>): List<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> findItinerary(List<List<String>> tickets) {
    
  }
}
```

### golang
```golang
func findItinerary(tickets [][]string) []string {
    
}
```

### ruby
```ruby
# @param {String[][]} tickets
# @return {String[]}
def find_itinerary(tickets)
    
end
```

### scala
```scala
object Solution {
    def findItinerary(tickets: List[List[String]]): List[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_itinerary(tickets: Vec<Vec<String>>) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (find-itinerary tickets)
  (-> (listof (listof string?)) (listof string?))
  )
```

### erlang
```erlang
-spec find_itinerary(Tickets :: [[unicode:unicode_binary()]]) -> [unicode:unicode_binary()].
find_itinerary(Tickets) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_itinerary(tickets :: [[String.t]]) :: [String.t]
  def find_itinerary(tickets) do
    
  end
end
```
