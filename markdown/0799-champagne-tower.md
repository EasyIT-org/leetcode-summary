# 799. Champagne Tower

- Difficulty: Medium
- Topics: Dynamic Programming
- Slug: champagne-tower
- Problem ID: 815

## Description
We stack glasses in a pyramid, where the first row has 1 glass, the second row has 2 glasses, and so on until the 100th row.  Each glass holds one cup of champagne.
Then, some champagne is poured into the first glass at the top.  When the topmost glass is full, any excess liquid poured will fall equally to the glass immediately to the left and right of it.  When those glasses become full, any excess champagne will fall equally to the left and right of those glasses, and so on.  (A glass at the bottom row has its excess champagne fall on the floor.)
For example, after one cup of champagne is poured, the top most glass is full.  After two cups of champagne are poured, the two glasses on the second row are half full.  After three cups of champagne are poured, those two cups become full - there are 3 full glasses total now.  After four cups of champagne are poured, the third row has the middle glass half full, and the two outside glasses are a quarter full, as pictured below.
Now after pouring some non-negative integer cups of champagne, return how full the jth glass in the ith row is (both i and j are 0-indexed.)
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: poured = 1, query_row = 1, query_glass = 1
Output: 0.00000
Explanation: We poured 1 cup of champange to the top glass of the tower (which is indexed as (0, 0)). There will be no excess liquid so all the glasses under the top glass will remain empty.
```
Images:
- https://s3-lc-upload.s3.amazonaws.com/uploads/2018/03/09/tower.png

### Example 2
```text
Input: poured = 2, query_row = 1, query_glass = 1
Output: 0.50000
Explanation: We poured 2 cups of champange to the top glass of the tower (which is indexed as (0, 0)). There is one cup of excess liquid. The glass indexed as (1, 0) and the glass indexed as (1, 1) will share the excess liquid equally, and each will get half cup of champange.
```
Images:
- https://s3-lc-upload.s3.amazonaws.com/uploads/2018/03/09/tower.png

### Example 3
```text
Input: poured = 100000009, query_row = 33, query_glass = 17
Output: 1.00000
```
Images:
- https://s3-lc-upload.s3.amazonaws.com/uploads/2018/03/09/tower.png


## Constraints
- 0 <= poured <= 109
- 0 <= query_glass <= query_row < 100

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    double champagneTower(int poured, int query_row, int query_glass) {
        
    }
};
```

### java
```java
class Solution {
    public double champagneTower(int poured, int query_row, int query_glass) {
        
    }
}
```

### python
```python
class Solution(object):
    def champagneTower(self, poured, query_row, query_glass):
        """
        :type poured: int
        :type query_row: int
        :type query_glass: int
        :rtype: float
        """
```

### python3
```python3
class Solution:
    def champagneTower(self, poured: int, query_row: int, query_glass: int) -> float:
```

### c
```c


double champagneTower(int poured, int query_row, int query_glass){

}
```

### csharp
```csharp
public class Solution {
    public double ChampagneTower(int poured, int query_row, int query_glass) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
    
};
```

### typescript
```typescript
function champagneTower(poured: number, query_row: number, query_glass: number): number {

};
```

### php
```php
class Solution {

    /**
     * @param Integer $poured
     * @param Integer $query_row
     * @param Integer $query_glass
     * @return Float
     */
    function champagneTower($poured, $query_row, $query_glass) {
        
    }
}
```

### swift
```swift
class Solution {
    func champagneTower(_ poured: Int, _ query_row: Int, _ query_glass: Int) -> Double {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun champagneTower(poured: Int, query_row: Int, query_glass: Int): Double {
        
    }
}
```

### golang
```golang
func champagneTower(poured int, query_row int, query_glass int) float64 {
    
}
```

### ruby
```ruby
# @param {Integer} poured
# @param {Integer} query_row
# @param {Integer} query_glass
# @return {Float}
def champagne_tower(poured, query_row, query_glass)
    
end
```

### scala
```scala
object Solution {
    def champagneTower(poured: Int, query_row: Int, query_glass: Int): Double = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn champagne_tower(poured: i32, query_row: i32, query_glass: i32) -> f64 {
        
    }
}
```
