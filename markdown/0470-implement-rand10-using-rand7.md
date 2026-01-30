# 470. Implement Rand10() Using Rand7()

- Difficulty: Medium
- Topics: Math, Rejection Sampling, Randomized, Probability and Statistics
- Slug: implement-rand10-using-rand7
- Problem ID: 903

## Description
Given the API rand7() that generates a uniform random integer in the range [1, 7], write a function rand10() that generates a uniform random integer in the range [1, 10]. You can only call the API rand7(), and you shouldn't call any other API. Please do not use a language's built-in random API.
Each test case will have one internal argument n, the number of times that your implemented function rand10() will be called while testing. Note that this is not an argument passed to rand10().
Example 1:
Example 2:
Example 3:
Constraints:
Follow up:

## Examples
### Example 1
```text
Input: n = 1
Output: [2]
```

### Example 2
```text
Input: n = 2
Output: [2,8]
```

### Example 3
```text
Input: n = 3
Output: [3,8,10]
```


## Constraints
- 1 <= n <= 105

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
// The rand7() API is already defined for you.
// int rand7();
// @return a random integer in the range 1 to 7

class Solution {
public:
    int rand10() {
        
    }
};
```

### java
```java
/**
 * The rand7() API is already defined in the parent class SolBase.
 * public int rand7();
 * @return a random integer in the range 1 to 7
 */
class Solution extends SolBase {
    public int rand10() {
        
    }
}
```

### python
```python
# The rand7() API is already defined for you.
# def rand7():
# @return a random integer in the range 1 to 7

class Solution(object):
    def rand10(self):
        """
        :rtype: int
        """
```

### python3
```python3
# The rand7() API is already defined for you.
# def rand7():
# @return a random integer in the range 1 to 7

class Solution:
    def rand10(self):
        """
        :rtype: int
        """
```

### c
```c
// The rand7() API is already defined for you.
// int rand7();
// @return a random integer in the range 1 to 7

int rand10() {
    
}
```

### csharp
```csharp
/**
 * The Rand7() API is already defined in the parent class SolBase.
 * public int Rand7();
 * @return a random integer in the range 1 to 7
 */
public class Solution : SolBase {
    public int Rand10() {
        
    }
}
```

### javascript
```javascript
/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
    
};
```

### typescript
```typescript
/**
 * The rand7() API is already defined for you.
 * function rand7(): number {}
 * @return a random integer in the range 1 to 7
 */

function rand10(): number {

};
```

### php
```php
/*
 * The rand7() API is already defined for you.
 * @return a random integer in the range 1 to 7
 * function rand7();
*/

class Solution {
    /**
     * @param 
     * @return Integer
     */
    function rand10() {
        
    }
}
```

### swift
```swift
/**
 * The rand7() API is already defined in the parent class SolBase.
 * func rand7() -> Int = {}
 * @return a random integer in the range 1 to 7
 */
class Solution : SolBase {
    func rand10() -> Int {
        
    }
}
```

### kotlin
```kotlin
/**
 * The rand7() API is already defined in the parent class SolBase.
 * fun rand7(): Int {}
 * @return a random integer in the range 1 to 7
 */
class Solution : SolBase() {
    fun rand10(): Int {
        
    }
}
```

### golang
```golang
func rand10() int {
    
}
```

### ruby
```ruby
# The rand7() API is already defined for you.
# def rand7()
# @return {Integer} a random integer in the range 1 to 7

def rand10()
    
end
```

### scala
```scala
/**
 * The rand7() API is already defined in the parent class SolBase.
 * def rand7(): Int = {}
 * @return a random integer in the range 1 to 7
 */
object Solution extends SolBase {
    def rand10(): Int = {
        
    }
}
```

### rust
```rust
/** 
 * The rand7() API is already defined for you.
 * @return a random integer in the range 1 to 7
 * fn rand7() -> i32;
 */

impl Solution {
    pub fn rand10() -> i32 {
        
    }
}
```
