# 433. Minimum Genetic Mutation

- Difficulty: Medium
- Topics: Hash Table, String, Breadth-First Search
- Slug: minimum-genetic-mutation
- Problem ID: 433

## Description
A gene string can be represented by an 8-character long string, with choices from 'A', 'C', 'G', and 'T'.
Suppose we need to investigate a mutation from a gene string startGene to a gene string endGene where one mutation is defined as one single character changed in the gene string.
There is also a gene bank bank that records all the valid gene mutations. A gene must be in bank to make it a valid gene string.
Given the two gene strings startGene and endGene and the gene bank bank, return the minimum number of mutations needed to mutate from startGene to endGene. If there is no such a mutation, return -1.
Note that the starting point is assumed to be valid, so it might not be included in the bank.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: startGene = "AACCGGTT", endGene = "AACCGGTA", bank = ["AACCGGTA"]
Output: 1
```

### Example 2
```text
Input: startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
Output: 2
```


## Constraints
- 0 <= bank.length <= 10
- startGene.length == endGene.length == bank[i].length == 8
- startGene, endGene, and bank[i] consist of only the characters ['A', 'C', 'G', 'T'].

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minMutation(string startGene, string endGene, vector<string>& bank) {
        
    }
};
```

### java
```java
class Solution {
    public int minMutation(String startGene, String endGene, String[] bank) {
        
    }
}
```

### python
```python
class Solution(object):
    def minMutation(self, startGene, endGene, bank):
        """
        :type startGene: str
        :type endGene: str
        :type bank: List[str]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minMutation(self, startGene: str, endGene: str, bank: List[str]) -> int:
```

### c
```c
int minMutation(char* startGene, char* endGene, char** bank, int bankSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinMutation(string startGene, string endGene, string[] bank) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    
};
```

### typescript
```typescript
function minMutation(startGene: string, endGene: string, bank: string[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $startGene
     * @param String $endGene
     * @param String[] $bank
     * @return Integer
     */
    function minMutation($startGene, $endGene, $bank) {
        
    }
}
```

### swift
```swift
class Solution {
    func minMutation(_ startGene: String, _ endGene: String, _ bank: [String]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minMutation(startGene: String, endGene: String, bank: Array<String>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minMutation(String startGene, String endGene, List<String> bank) {
    
  }
}
```

### golang
```golang
func minMutation(startGene string, endGene string, bank []string) int {
    
}
```

### ruby
```ruby
# @param {String} start_gene
# @param {String} end_gene
# @param {String[]} bank
# @return {Integer}
def min_mutation(start_gene, end_gene, bank)
    
end
```

### scala
```scala
object Solution {
    def minMutation(startGene: String, endGene: String, bank: Array[String]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_mutation(start_gene: String, end_gene: String, bank: Vec<String>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-mutation startGene endGene bank)
  (-> string? string? (listof string?) exact-integer?)
  )
```

### erlang
```erlang
-spec min_mutation(StartGene :: unicode:unicode_binary(), EndGene :: unicode:unicode_binary(), Bank :: [unicode:unicode_binary()]) -> integer().
min_mutation(StartGene, EndGene, Bank) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_mutation(start_gene :: String.t, end_gene :: String.t, bank :: [String.t]) :: integer
  def min_mutation(start_gene, end_gene, bank) do
    
  end
end
```
