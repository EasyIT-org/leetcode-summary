# 599. Minimum Index Sum of Two Lists

- Difficulty: Easy
- Topics: Array, Hash Table, String
- Slug: minimum-index-sum-of-two-lists
- Problem ID: 599

## Description
Given two arrays of strings list1 and list2, find the common strings with the least index sum.
A common string is a string that appeared in both list1 and list2.
A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.
Return all the common strings with the least index sum. Return the answer in any order.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
Output: ["Shogun"]
Explanation: The only common string is "Shogun".
```

### Example 2
```text
Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
Output: ["Shogun"]
Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.
```

### Example 3
```text
Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
Output: ["sad","happy"]
Explanation: There are three common strings:
"happy" with index sum = (0 + 1) = 1.
"sad" with index sum = (1 + 0) = 1.
"good" with index sum = (2 + 2) = 4.
The strings with the least index sum are "sad" and "happy".
```


## Constraints
- 1 <= list1.length, list2.length <= 1000
- 1 <= list1[i].length, list2[i].length <= 30
- list1[i] and list2[i] consist of spaces ' ' and English letters.
- All the strings of list1 are unique.
- All the strings of list2 are unique.
- There is at least a common string between list1 and list2.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> findRestaurant(vector<string>& list1, vector<string>& list2) {
        
    }
};
```

### java
```java
class Solution {
    public String[] findRestaurant(String[] list1, String[] list2) {
        
    }
}
```

### python
```python
class Solution(object):
    def findRestaurant(self, list1, list2):
        """
        :type list1: List[str]
        :type list2: List[str]
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** findRestaurant(char** list1, int list1Size, char** list2, int list2Size, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public string[] FindRestaurant(string[] list1, string[] list2) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    
};
```

### typescript
```typescript
function findRestaurant(list1: string[], list2: string[]): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $list1
     * @param String[] $list2
     * @return String[]
     */
    function findRestaurant($list1, $list2) {
        
    }
}
```

### swift
```swift
class Solution {
    func findRestaurant(_ list1: [String], _ list2: [String]) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findRestaurant(list1: Array<String>, list2: Array<String>): Array<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> findRestaurant(List<String> list1, List<String> list2) {
    
  }
}
```

### golang
```golang
func findRestaurant(list1 []string, list2 []string) []string {
    
}
```

### ruby
```ruby
# @param {String[]} list1
# @param {String[]} list2
# @return {String[]}
def find_restaurant(list1, list2)
    
end
```

### scala
```scala
object Solution {
    def findRestaurant(list1: Array[String], list2: Array[String]): Array[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_restaurant(list1: Vec<String>, list2: Vec<String>) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (find-restaurant list1 list2)
  (-> (listof string?) (listof string?) (listof string?))
  )
```

### erlang
```erlang
-spec find_restaurant(List1 :: [unicode:unicode_binary()], List2 :: [unicode:unicode_binary()]) -> [unicode:unicode_binary()].
find_restaurant(List1, List2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_restaurant(list1 :: [String.t], list2 :: [String.t]) :: [String.t]
  def find_restaurant(list1, list2) do
    
  end
end
```
