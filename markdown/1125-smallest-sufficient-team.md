# 1125. Smallest Sufficient Team

- Difficulty: Hard
- Topics: Array, Dynamic Programming, Bit Manipulation, Bitmask
- Slug: smallest-sufficient-team
- Problem ID: 1220

## Description
In a project, you have a list of required skills req_skills, and a list of people. The ith person people[i] contains a list of skills that the person has.
Consider a sufficient team: a set of people such that for every required skill in req_skills, there is at least one person in the team who has that skill. We can represent these teams by the index of each person.
Return any sufficient team of the smallest possible size, represented by the index of each person. You may return the answer in any order.
It is guaranteed an answer exists.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: req_skills = ["java","nodejs","reactjs"], people = [["java"],["nodejs"],["nodejs","reactjs"]]
Output: [0,2]
```

### Example 2
```text
Input: req_skills = ["algorithms","math","java","reactjs","csharp","aws"], people = [["algorithms","math","java"],["algorithms","math","reactjs"],["java","csharp","aws"],["reactjs","csharp"],["csharp","math"],["aws","java"]]
Output: [1,2]
```


## Constraints
- 1 <= req_skills.length <= 16
- 1 <= req_skills[i].length <= 16
- req_skills[i] consists of lowercase English letters.
- All the strings of req_skills are unique.
- 1 <= people.length <= 60
- 0 <= people[i].length <= 16
- 1 <= people[i][j].length <= 16
- people[i][j] consists of lowercase English letters.
- All the strings of people[i] are unique.
- Every skill in people[i] is a skill in req_skills.
- It is guaranteed a sufficient team exists.

## Hints
- Do a bitmask DP.
- For each person, for each set of skills, we can update our understanding of a minimum set of people needed to perform this set of skills.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> smallestSufficientTeam(vector<string>& req_skills, vector<vector<string>>& people) {
        
    }
};
```

### java
```java
class Solution {
    public int[] smallestSufficientTeam(String[] req_skills, List<List<String>> people) {
        
    }
}
```

### python
```python
class Solution(object):
    def smallestSufficientTeam(self, req_skills, people):
        """
        :type req_skills: List[str]
        :type people: List[List[str]]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def smallestSufficientTeam(self, req_skills: List[str], people: List[List[str]]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* smallestSufficientTeam(char** req_skills, int req_skillsSize, char*** people, int peopleSize, int* peopleColSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] SmallestSufficientTeam(string[] req_skills, IList<IList<string>> people) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(req_skills, people) {
    
};
```

### typescript
```typescript
function smallestSufficientTeam(req_skills: string[], people: string[][]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $req_skills
     * @param String[][] $people
     * @return Integer[]
     */
    function smallestSufficientTeam($req_skills, $people) {
        
    }
}
```

### swift
```swift
class Solution {
    func smallestSufficientTeam(_ req_skills: [String], _ people: [[String]]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun smallestSufficientTeam(req_skills: Array<String>, people: List<List<String>>): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> smallestSufficientTeam(List<String> req_skills, List<List<String>> people) {
    
  }
}
```

### golang
```golang
func smallestSufficientTeam(req_skills []string, people [][]string) []int {
    
}
```

### ruby
```ruby
# @param {String[]} req_skills
# @param {String[][]} people
# @return {Integer[]}
def smallest_sufficient_team(req_skills, people)
    
end
```

### scala
```scala
object Solution {
    def smallestSufficientTeam(req_skills: Array[String], people: List[List[String]]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn smallest_sufficient_team(req_skills: Vec<String>, people: Vec<Vec<String>>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (smallest-sufficient-team req_skills people)
  (-> (listof string?) (listof (listof string?)) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec smallest_sufficient_team(Req_skills :: [unicode:unicode_binary()], People :: [[unicode:unicode_binary()]]) -> [integer()].
smallest_sufficient_team(Req_skills, People) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec smallest_sufficient_team(req_skills :: [String.t], people :: [[String.t]]) :: [integer]
  def smallest_sufficient_team(req_skills, people) do
    
  end
end
```
