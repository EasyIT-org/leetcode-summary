# 649. Dota2 Senate

- Difficulty: Medium
- Topics: String, Greedy, Queue
- Slug: dota2-senate
- Problem ID: 649

## Description
In the world of Dota2, there are two parties: the Radiant and the Dire.
The Dota2 senate consists of senators coming from two parties. Now the Senate wants to decide on a change in the Dota2 game. The voting for this change is a round-based procedure. In each round, each senator can exercise one of the two rights:
Given a string senate representing each senator's party belonging. The character 'R' and 'D' represent the Radiant party and the Dire party. Then if there are n senators, the size of the given string will be n.
The round-based procedure starts from the first senator to the last senator in the given order. This procedure will last until the end of voting. All the senators who have lost their rights will be skipped during the procedure.
Suppose every senator is smart enough and will play the best strategy for his own party. Predict which party will finally announce the victory and change the Dota2 game. The output should be "Radiant" or "Dire".
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: senate = "RD"
Output: "Radiant"
Explanation: 
The first senator comes from Radiant and he can just ban the next senator's right in round 1. 
And the second senator can't exercise any rights anymore since his right has been banned. 
And in round 2, the first senator can just announce the victory since he is the only guy in the senate who can vote.
```

### Example 2
```text
Input: senate = "RDD"
Output: "Dire"
Explanation: 
The first senator comes from Radiant and he can just ban the next senator's right in round 1. 
And the second senator can't exercise any rights anymore since his right has been banned. 
And the third senator comes from Dire and he can ban the first senator's right in round 1. 
And in round 2, the third senator can just announce the victory since he is the only guy in the senate who can vote.
```


## Constraints
- n == senate.length
- 1 <= n <= 104
- senate[i] is either 'R' or 'D'.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string predictPartyVictory(string senate) {
        
    }
};
```

### java
```java
class Solution {
    public String predictPartyVictory(String senate) {
        
    }
}
```

### python
```python
class Solution(object):
    def predictPartyVictory(self, senate):
        """
        :type senate: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def predictPartyVictory(self, senate: str) -> str:
```

### c
```c
char* predictPartyVictory(char* senate) {
    
}
```

### csharp
```csharp
public class Solution {
    public string PredictPartyVictory(string senate) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    
};
```

### typescript
```typescript
function predictPartyVictory(senate: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $senate
     * @return String
     */
    function predictPartyVictory($senate) {
        
    }
}
```

### swift
```swift
class Solution {
    func predictPartyVictory(_ senate: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun predictPartyVictory(senate: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String predictPartyVictory(String senate) {
    
  }
}
```

### golang
```golang
func predictPartyVictory(senate string) string {
    
}
```

### ruby
```ruby
# @param {String} senate
# @return {String}
def predict_party_victory(senate)
    
end
```

### scala
```scala
object Solution {
    def predictPartyVictory(senate: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn predict_party_victory(senate: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (predict-party-victory senate)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec predict_party_victory(Senate :: unicode:unicode_binary()) -> unicode:unicode_binary().
predict_party_victory(Senate) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec predict_party_victory(senate :: String.t) :: String.t
  def predict_party_victory(senate) do
    
  end
end
```
