# 929. Unique Email Addresses

- Difficulty: Easy
- Topics: Array, Hash Table, String
- Slug: unique-email-addresses
- Problem ID: 965

## Description
Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.
If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.
If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.
It is possible to use both of these rules at the same time.
Given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive mails.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.
```

### Example 2
```text
Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
Output: 3
```


## Constraints
- 1 <= emails.length <= 100
- 1 <= emails[i].length <= 100
- emails[i] consist of lowercase English letters, '+', '.' and '@'.
- Each emails[i] contains exactly one '@' character.
- All local and domain names are non-empty.
- Local names do not start with a '+' character.
- Domain names end with the ".com" suffix.
- Domain names must contain at least one character before ".com" suffix.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numUniqueEmails(vector<string>& emails) {
        
    }
};
```

### java
```java
class Solution {
    public int numUniqueEmails(String[] emails) {
        
    }
}
```

### python
```python
class Solution(object):
    def numUniqueEmails(self, emails):
        """
        :type emails: List[str]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numUniqueEmails(self, emails: List[str]) -> int:
```

### c
```c
int numUniqueEmails(char** emails, int emailsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumUniqueEmails(string[] emails) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    
};
```

### typescript
```typescript
function numUniqueEmails(emails: string[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $emails
     * @return Integer
     */
    function numUniqueEmails($emails) {
        
    }
}
```

### swift
```swift
class Solution {
    func numUniqueEmails(_ emails: [String]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numUniqueEmails(emails: Array<String>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numUniqueEmails(List<String> emails) {
    
  }
}
```

### golang
```golang
func numUniqueEmails(emails []string) int {
    
}
```

### ruby
```ruby
# @param {String[]} emails
# @return {Integer}
def num_unique_emails(emails)
    
end
```

### scala
```scala
object Solution {
    def numUniqueEmails(emails: Array[String]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_unique_emails(emails: Vec<String>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-unique-emails emails)
  (-> (listof string?) exact-integer?)
  )
```

### erlang
```erlang
-spec num_unique_emails(Emails :: [unicode:unicode_binary()]) -> integer().
num_unique_emails(Emails) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_unique_emails(emails :: [String.t]) :: integer
  def num_unique_emails(emails) do
    
  end
end
```
