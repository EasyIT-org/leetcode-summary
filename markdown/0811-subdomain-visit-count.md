# 811. Subdomain Visit Count

- Difficulty: Medium
- Topics: Array, Hash Table, String, Counting
- Slug: subdomain-visit-count
- Problem ID: 829

## Description
A website domain "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com" and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.
A count-paired domain is a domain that has one of the two formats "rep d1.d2.d3" or "rep d1.d2" where rep is the number of visits to the domain and d1.d2.d3 is the domain itself.
Given an array of count-paired domains cpdomains, return an array of the count-paired domains of each subdomain in the input. You may return the answer in any order.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: cpdomains = ["9001 discuss.leetcode.com"]
Output: ["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"]
Explanation: We only have one website domain: "discuss.leetcode.com".
As discussed above, the subdomain "leetcode.com" and "com" will also be visited. So they will all be visited 9001 times.
```

### Example 2
```text
Input: cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
Output: ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
Explanation: We will visit "google.mail.com" 900 times, "yahoo.com" 50 times, "intel.mail.com" once and "wiki.org" 5 times.
For the subdomains, we will visit "mail.com" 900 + 1 = 901 times, "com" 900 + 50 + 1 = 951 times, and "org" 5 times.
```


## Constraints
- 1 <= cpdomain.length <= 100
- 1 <= cpdomain[i].length <= 100
- cpdomain[i] follows either the "repi d1i.d2i.d3i" format or the "repi d1i.d2i" format.
- repi is an integer in the range [1, 104].
- d1i, d2i, and d3i consist of lowercase English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> subdomainVisits(vector<string>& cpdomains) {
        
    }
};
```

### java
```java
class Solution {
    public List<String> subdomainVisits(String[] cpdomains) {
        
    }
}
```

### python
```python
class Solution(object):
    def subdomainVisits(self, cpdomains):
        """
        :type cpdomains: List[str]
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def subdomainVisits(self, cpdomains: List[str]) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** subdomainVisits(char** cpdomains, int cpdomainsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<string> SubdomainVisits(string[] cpdomains) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    
};
```

### typescript
```typescript
function subdomainVisits(cpdomains: string[]): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $cpdomains
     * @return String[]
     */
    function subdomainVisits($cpdomains) {
        
    }
}
```

### swift
```swift
class Solution {
    func subdomainVisits(_ cpdomains: [String]) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun subdomainVisits(cpdomains: Array<String>): List<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> subdomainVisits(List<String> cpdomains) {
    
  }
}
```

### golang
```golang
func subdomainVisits(cpdomains []string) []string {
    
}
```

### ruby
```ruby
# @param {String[]} cpdomains
# @return {String[]}
def subdomain_visits(cpdomains)
    
end
```

### scala
```scala
object Solution {
    def subdomainVisits(cpdomains: Array[String]): List[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn subdomain_visits(cpdomains: Vec<String>) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (subdomain-visits cpdomains)
  (-> (listof string?) (listof string?))
  )
```

### erlang
```erlang
-spec subdomain_visits(Cpdomains :: [unicode:unicode_binary()]) -> [unicode:unicode_binary()].
subdomain_visits(Cpdomains) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec subdomain_visits(cpdomains :: [String.t]) :: [String.t]
  def subdomain_visits(cpdomains) do
    
  end
end
```
