# 860. Lemonade Change

- Difficulty: Easy
- Topics: Array, Greedy
- Slug: lemonade-change
- Problem ID: 890

## Description
At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.
Note that you do not have any change in hand at first.
Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: bills = [5,5,5,10,20]
Output: true
Explanation: 
From the first 3 customers, we collect three $5 bills in order.
From the fourth customer, we collect a $10 bill and give back a $5.
From the fifth customer, we give a $10 bill and a $5 bill.
Since all customers got correct change, we output true.
```

### Example 2
```text
Input: bills = [5,5,10,10,20]
Output: false
Explanation: 
From the first two customers in order, we collect two $5 bills.
For the next two customers in order, we collect a $10 bill and give back a $5 bill.
For the last customer, we can not give the change of $15 back because we only have two $10 bills.
Since not every customer received the correct change, the answer is false.
```


## Constraints
- 1 <= bills.length <= 105
- bills[i] is either 5, 10, or 20.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool lemonadeChange(vector<int>& bills) {
        
    }
};
```

### java
```java
class Solution {
    public boolean lemonadeChange(int[] bills) {
        
    }
}
```

### python
```python
class Solution(object):
    def lemonadeChange(self, bills):
        """
        :type bills: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def lemonadeChange(self, bills: List[int]) -> bool:
```

### c
```c
bool lemonadeChange(int* bills, int billsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool LemonadeChange(int[] bills) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    
};
```

### typescript
```typescript
function lemonadeChange(bills: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $bills
     * @return Boolean
     */
    function lemonadeChange($bills) {
        
    }
}
```

### swift
```swift
class Solution {
    func lemonadeChange(_ bills: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun lemonadeChange(bills: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool lemonadeChange(List<int> bills) {
    
  }
}
```

### golang
```golang
func lemonadeChange(bills []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} bills
# @return {Boolean}
def lemonade_change(bills)
    
end
```

### scala
```scala
object Solution {
    def lemonadeChange(bills: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn lemonade_change(bills: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (lemonade-change bills)
  (-> (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec lemonade_change(Bills :: [integer()]) -> boolean().
lemonade_change(Bills) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec lemonade_change(bills :: [integer]) :: boolean
  def lemonade_change(bills) do
    
  end
end
```
