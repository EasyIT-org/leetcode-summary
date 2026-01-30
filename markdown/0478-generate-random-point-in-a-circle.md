# 478. Generate Random Point in a Circle

- Difficulty: Medium
- Topics: Math, Geometry, Rejection Sampling, Randomized
- Slug: generate-random-point-in-a-circle
- Problem ID: 915

## Description
Given the radius and the position of the center of a circle, implement the function randPoint which generates a uniform random point inside the circle.
Implement the Solution class:
Example 1:
Constraints:

## Examples
### Example 1
```text
Input
["Solution", "randPoint", "randPoint", "randPoint"]
[[1.0, 0.0, 0.0], [], [], []]
Output
[null, [-0.02493, -0.38077], [0.82314, 0.38945], [0.36572, 0.17248]]

Explanation
Solution solution = new Solution(1.0, 0.0, 0.0);
solution.randPoint(); // return [-0.02493, -0.38077]
solution.randPoint(); // return [0.82314, 0.38945]
solution.randPoint(); // return [0.36572, 0.17248]
```


## Constraints
- 0 < radius <= 108
- -107 <= x_center, y_center <= 107
- At most 3 * 104 calls will be made to randPoint.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    Solution(double radius, double x_center, double y_center) {
        
    }
    
    vector<double> randPoint() {
        
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * Solution* obj = new Solution(radius, x_center, y_center);
 * vector<double> param_1 = obj->randPoint();
 */
```

### java
```java
class Solution {

    public Solution(double radius, double x_center, double y_center) {
        
    }
    
    public double[] randPoint() {
        
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(radius, x_center, y_center);
 * double[] param_1 = obj.randPoint();
 */
```

### python
```python
class Solution(object):

    def __init__(self, radius, x_center, y_center):
        """
        :type radius: float
        :type x_center: float
        :type y_center: float
        """
        

    def randPoint(self):
        """
        :rtype: List[float]
        """
        


# Your Solution object will be instantiated and called as such:
# obj = Solution(radius, x_center, y_center)
# param_1 = obj.randPoint()
```

### python3
```python3
class Solution:

    def __init__(self, radius: float, x_center: float, y_center: float):
        

    def randPoint(self) -> List[float]:
        


# Your Solution object will be instantiated and called as such:
# obj = Solution(radius, x_center, y_center)
# param_1 = obj.randPoint()
```

### c
```c



typedef struct {
    
} Solution;


Solution* solutionCreate(double radius, double x_center, double y_center) {
    
}

double* solutionRandPoint(Solution* obj, int* retSize) {
    
}

void solutionFree(Solution* obj) {
    
}

/**
 * Your Solution struct will be instantiated and called as such:
 * Solution* obj = solutionCreate(radius, x_center, y_center);
 * double* param_1 = solutionRandPoint(obj, retSize);
 
 * solutionFree(obj);
*/
```

### csharp
```csharp
public class Solution {

    public Solution(double radius, double x_center, double y_center) {
        
    }
    
    public double[] RandPoint() {
        
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(radius, x_center, y_center);
 * double[] param_1 = obj.RandPoint();
 */
```

### javascript
```javascript
/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function(radius, x_center, y_center) {
    
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
```

### typescript
```typescript
class Solution {
    constructor(radius: number, x_center: number, y_center: number) {
        
    }

    randPoint(): number[] {
        
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
```

### php
```php
class Solution {
    /**
     * @param Float $radius
     * @param Float $x_center
     * @param Float $y_center
     */
    function __construct($radius, $x_center, $y_center) {
        
    }
  
    /**
     * @return Float[]
     */
    function randPoint() {
        
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * $obj = Solution($radius, $x_center, $y_center);
 * $ret_1 = $obj->randPoint();
 */
```

### swift
```swift

class Solution {

    init(_ radius: Double, _ x_center: Double, _ y_center: Double) {
        
    }
    
    func randPoint() -> [Double] {
        
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * let obj = Solution(radius, x_center, y_center)
 * let ret_1: [Double] = obj.randPoint()
 */
```

### kotlin
```kotlin
class Solution(radius: Double, x_center: Double, y_center: Double) {

    fun randPoint(): DoubleArray {
        
    }

}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
```

### dart
```dart
class Solution {

  Solution(double radius, double x_center, double y_center) {
    
  }
  
  List<double> randPoint() {
    
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = Solution(radius, x_center, y_center);
 * List<double> param1 = obj.randPoint();
 */
```

### golang
```golang
type Solution struct {
    
}


func Constructor(radius float64, x_center float64, y_center float64) Solution {
    
}


func (this *Solution) RandPoint() []float64 {
    
}


/**
 * Your Solution object will be instantiated and called as such:
 * obj := Constructor(radius, x_center, y_center);
 * param_1 := obj.RandPoint();
 */
```

### ruby
```ruby
class Solution

=begin
    :type radius: Float
    :type x_center: Float
    :type y_center: Float
=end
    def initialize(radius, x_center, y_center)
        
    end


=begin
    :rtype: Float[]
=end
    def rand_point()
        
    end


end

# Your Solution object will be instantiated and called as such:
# obj = Solution.new(radius, x_center, y_center)
# param_1 = obj.rand_point()
```

### scala
```scala
class Solution(_radius: Double, _x_center: Double, _y_center: Double) {

    def randPoint(): Array[Double] = {
        
    }

}

/**
 * Your Solution object will be instantiated and called as such:
 * val obj = new Solution(radius, x_center, y_center)
 * val param_1 = obj.randPoint()
 */
```

### rust
```rust
struct Solution {

}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Solution {

    fn new(radius: f64, x_center: f64, y_center: f64) -> Self {
        
    }
    
    fn rand_point(&self) -> Vec<f64> {
        
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * let obj = Solution::new(radius, x_center, y_center);
 * let ret_1: Vec<f64> = obj.rand_point();
 */
```

### racket
```racket
(define solution%
  (class object%
    (super-new)
    
    ; radius : flonum?
    ; x_center : flonum?
    ; y_center : flonum?
    (init-field
      radius
      x_center
      y_center)
    
    ; rand-point : -> (listof flonum?)
    (define/public (rand-point)
      )))

;; Your solution% object will be instantiated and called as such:
;; (define obj (new solution% [radius radius] [x_center x_center] [y_center y_center]))
;; (define param_1 (send obj rand-point))
```

### erlang
```erlang
-spec solution_init_(Radius :: float(), X_center :: float(), Y_center :: float()) -> any().
solution_init_(Radius, X_center, Y_center) ->
  .

-spec solution_rand_point() -> [float()].
solution_rand_point() ->
  .


%% Your functions will be called as such:
%% solution_init_(Radius, X_center, Y_center),
%% Param_1 = solution_rand_point(),

%% solution_init_ will be called before every test case, in which you can do some necessary initializations.
```

### elixir
```elixir
defmodule Solution do
  @spec init_(radius :: float, x_center :: float, y_center :: float) :: any
  def init_(radius, x_center, y_center) do
    
  end

  @spec rand_point() :: [float]
  def rand_point() do
    
  end
end

# Your functions will be called as such:
# Solution.init_(radius, x_center, y_center)
# param_1 = Solution.rand_point()

# Solution.init_ will be called before every test case, in which you can do some necessary initializations.
```
