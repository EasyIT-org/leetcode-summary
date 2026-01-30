# 1169. Invalid Transactions

- Difficulty: Medium
- Topics: Array, Hash Table, String, Sorting
- Slug: invalid-transactions
- Problem ID: 1272

## Description
A transaction is possibly invalid if:
You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction.
Return a list of transactions that are possibly invalid. You may return the answer in any order.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
Output: ["alice,20,800,mtv","alice,50,100,beijing"]
Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.
```

### Example 2
```text
Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
Output: ["alice,50,1200,mtv"]
```

### Example 3
```text
Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
Output: ["bob,50,1200,mtv"]
```


## Constraints
- transactions.length <= 1000
- Each transactions[i] takes the form "{name},{time},{amount},{city}"
- Each {name} and {city} consist of lowercase English letters, and have lengths between 1 and 10.
- Each {time} consist of digits, and represent an integer between 0 and 1000.
- Each {amount} consist of digits, and represent an integer between 0 and 2000.

## Hints
- Split each string into four arrays.
- For each transaction check if it's invalid, you can do this with just a loop with help of the four arrays generated on step 1.
- At the end you perform O(N ^ 2) operations.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> invalidTransactions(vector<string>& transactions) {
        
    }
};
```

### java
```java
class Solution {
    public List<String> invalidTransactions(String[] transactions) {
        
    }
}
```

### python
```python
class Solution(object):
    def invalidTransactions(self, transactions):
        """
        :type transactions: List[str]
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def invalidTransactions(self, transactions: List[str]) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** invalidTransactions(char** transactions, int transactionsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<string> InvalidTransactions(string[] transactions) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    
};
```

### typescript
```typescript
function invalidTransactions(transactions: string[]): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $transactions
     * @return String[]
     */
    function invalidTransactions($transactions) {
        
    }
}
```

### swift
```swift
class Solution {
    func invalidTransactions(_ transactions: [String]) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun invalidTransactions(transactions: Array<String>): List<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> invalidTransactions(List<String> transactions) {
    
  }
}
```

### golang
```golang
func invalidTransactions(transactions []string) []string {
    
}
```

### ruby
```ruby
# @param {String[]} transactions
# @return {String[]}
def invalid_transactions(transactions)
    
end
```

### scala
```scala
object Solution {
    def invalidTransactions(transactions: Array[String]): List[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn invalid_transactions(transactions: Vec<String>) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (invalid-transactions transactions)
  (-> (listof string?) (listof string?))
  )
```

### erlang
```erlang
-spec invalid_transactions(Transactions :: [unicode:unicode_binary()]) -> [unicode:unicode_binary()].
invalid_transactions(Transactions) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec invalid_transactions(transactions :: [String.t]) :: [String.t]
  def invalid_transactions(transactions) do
    
  end
end
```
