# 948. Bag of Tokens

- Difficulty: Medium
- Topics: Array, Two Pointers, Greedy, Sorting
- Slug: bag-of-tokens
- Problem ID: 985

## Description
You start with an initial power of power, an initial score of 0, and a bag of tokens given as an integer array tokens, where each tokens[i] denotes the value of tokeni.
Your goal is to maximize the total score by strategically playing these tokens. In one move, you can play an unplayed token in one of the two ways (but not both for the same token):
Return the maximum possible score you can achieve after playing any number of tokens.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: tokens = [100], power = 50
Output: 0
Explanation : Since your score is 0 initially, you cannot play the token face-down. You also cannot play it face-up since your power ( 50 ) is less than tokens[0] ( 100 ).
```

### Example 2
```text
Input: tokens = [200,100], power = 150
Output: 1
Explanation: Play token 1 ( 100 ) face-up, reducing your power to 50 and increasing your score to 1 .
There is no need to play token 0 , since you cannot play it face-up to add to your score. The maximum score achievable is 1 .
```

### Example 3
```text
Input: tokens = [100,200,300,400], power = 200
Output: 2
Explanation: Play the tokens in this order to get a score of 2 :
The maximum score achievable is 2 .
```


## Constraints
- 0 <= tokens.length <= 1000
- 0 <= tokens[i], power < 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int bagOfTokensScore(vector<int>& tokens, int power) {
        
    }
};
```

### java
```java
class Solution {
    public int bagOfTokensScore(int[] tokens, int power) {
        
    }
}
```

### python
```python
class Solution(object):
    def bagOfTokensScore(self, tokens, power):
        """
        :type tokens: List[int]
        :type power: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def bagOfTokensScore(self, tokens: List[int], power: int) -> int:
```

### c
```c
int bagOfTokensScore(int* tokens, int tokensSize, int power) {
    
}
```

### csharp
```csharp
public class Solution {
    public int BagOfTokensScore(int[] tokens, int power) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    
};
```

### typescript
```typescript
function bagOfTokensScore(tokens: number[], power: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $tokens
     * @param Integer $power
     * @return Integer
     */
    function bagOfTokensScore($tokens, $power) {
        
    }
}
```

### swift
```swift
class Solution {
    func bagOfTokensScore(_ tokens: [Int], _ power: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun bagOfTokensScore(tokens: IntArray, power: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int bagOfTokensScore(List<int> tokens, int power) {
    
  }
}
```

### golang
```golang
func bagOfTokensScore(tokens []int, power int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} tokens
# @param {Integer} power
# @return {Integer}
def bag_of_tokens_score(tokens, power)
    
end
```

### scala
```scala
object Solution {
    def bagOfTokensScore(tokens: Array[Int], power: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn bag_of_tokens_score(tokens: Vec<i32>, power: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (bag-of-tokens-score tokens power)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec bag_of_tokens_score(Tokens :: [integer()], Power :: integer()) -> integer().
bag_of_tokens_score(Tokens, Power) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec bag_of_tokens_score(tokens :: [integer], power :: integer) :: integer
  def bag_of_tokens_score(tokens, power) do
    
  end
end
```
