# 715. Range Module

- Difficulty: Hard
- Topics: Design, Segment Tree, Ordered Set
- Slug: range-module
- Problem ID: 715

## Description
A Range Module is a module that tracks ranges of numbers. Design a data structure to track the ranges represented as half-open intervals and query about them.
A half-open interval [left, right) denotes all the real numbers x where left <= x < right.
Implement the RangeModule class:
Example 1:
Constraints:

## Examples
### Example 1
```text
Input
["RangeModule", "addRange", "removeRange", "queryRange", "queryRange", "queryRange"]
[[], [10, 20], [14, 16], [10, 14], [13, 15], [16, 17]]
Output
[null, null, null, true, false, true]

Explanation
RangeModule rangeModule = new RangeModule();
rangeModule.addRange(10, 20);
rangeModule.removeRange(14, 16);
rangeModule.queryRange(10, 14); // return True,(Every number in [10, 14) is being tracked)
rangeModule.queryRange(13, 15); // return False,(Numbers like 14, 14.03, 14.17 in [13, 15) are not being tracked)
rangeModule.queryRange(16, 17); // return True, (The number 16 in [16, 17) is still being tracked, despite the remove operation)
```


## Constraints
- 1 <= left < right <= 109
- At most 104 calls will be made to addRange, queryRange, and removeRange.

## Hints
- Maintain a sorted set of disjoint intervals.  addRange and removeRange can be performed with time complexity linear to the size of this set; queryRange can be performed with time complexity logarithmic to the size of this set.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class RangeModule {
public:
    RangeModule() {
        
    }
    
    void addRange(int left, int right) {
        
    }
    
    bool queryRange(int left, int right) {
        
    }
    
    void removeRange(int left, int right) {
        
    }
};

/**
 * Your RangeModule object will be instantiated and called as such:
 * RangeModule* obj = new RangeModule();
 * obj->addRange(left,right);
 * bool param_2 = obj->queryRange(left,right);
 * obj->removeRange(left,right);
 */
```

### java
```java
class RangeModule {

    public RangeModule() {
        
    }
    
    public void addRange(int left, int right) {
        
    }
    
    public boolean queryRange(int left, int right) {
        
    }
    
    public void removeRange(int left, int right) {
        
    }
}

/**
 * Your RangeModule object will be instantiated and called as such:
 * RangeModule obj = new RangeModule();
 * obj.addRange(left,right);
 * boolean param_2 = obj.queryRange(left,right);
 * obj.removeRange(left,right);
 */
```

### python
```python
class RangeModule(object):

    def __init__(self):
        

    def addRange(self, left, right):
        """
        :type left: int
        :type right: int
        :rtype: None
        """
        

    def queryRange(self, left, right):
        """
        :type left: int
        :type right: int
        :rtype: bool
        """
        

    def removeRange(self, left, right):
        """
        :type left: int
        :type right: int
        :rtype: None
        """
        


# Your RangeModule object will be instantiated and called as such:
# obj = RangeModule()
# obj.addRange(left,right)
# param_2 = obj.queryRange(left,right)
# obj.removeRange(left,right)
```

### python3
```python3
class RangeModule:

    def __init__(self):
        

    def addRange(self, left: int, right: int) -> None:
        

    def queryRange(self, left: int, right: int) -> bool:
        

    def removeRange(self, left: int, right: int) -> None:
        


# Your RangeModule object will be instantiated and called as such:
# obj = RangeModule()
# obj.addRange(left,right)
# param_2 = obj.queryRange(left,right)
# obj.removeRange(left,right)
```

### c
```c



typedef struct {
    
} RangeModule;


RangeModule* rangeModuleCreate() {
    
}

void rangeModuleAddRange(RangeModule* obj, int left, int right) {
    
}

bool rangeModuleQueryRange(RangeModule* obj, int left, int right) {
    
}

void rangeModuleRemoveRange(RangeModule* obj, int left, int right) {
    
}

void rangeModuleFree(RangeModule* obj) {
    
}

/**
 * Your RangeModule struct will be instantiated and called as such:
 * RangeModule* obj = rangeModuleCreate();
 * rangeModuleAddRange(obj, left, right);
 
 * bool param_2 = rangeModuleQueryRange(obj, left, right);
 
 * rangeModuleRemoveRange(obj, left, right);
 
 * rangeModuleFree(obj);
*/
```

### csharp
```csharp
public class RangeModule {

    public RangeModule() {
        
    }
    
    public void AddRange(int left, int right) {
        
    }
    
    public bool QueryRange(int left, int right) {
        
    }
    
    public void RemoveRange(int left, int right) {
        
    }
}

/**
 * Your RangeModule object will be instantiated and called as such:
 * RangeModule obj = new RangeModule();
 * obj.AddRange(left,right);
 * bool param_2 = obj.QueryRange(left,right);
 * obj.RemoveRange(left,right);
 */
```

### javascript
```javascript

var RangeModule = function() {
    
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.addRange = function(left, right) {
    
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {boolean}
 */
RangeModule.prototype.queryRange = function(left, right) {
    
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.removeRange = function(left, right) {
    
};

/** 
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */
```

### typescript
```typescript
class RangeModule {
    constructor() {
        
    }

    addRange(left: number, right: number): void {
        
    }

    queryRange(left: number, right: number): boolean {
        
    }

    removeRange(left: number, right: number): void {
        
    }
}

/**
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */
```

### php
```php
class RangeModule {
    /**
     */
    function __construct() {
        
    }
  
    /**
     * @param Integer $left
     * @param Integer $right
     * @return NULL
     */
    function addRange($left, $right) {
        
    }
  
    /**
     * @param Integer $left
     * @param Integer $right
     * @return Boolean
     */
    function queryRange($left, $right) {
        
    }
  
    /**
     * @param Integer $left
     * @param Integer $right
     * @return NULL
     */
    function removeRange($left, $right) {
        
    }
}

/**
 * Your RangeModule object will be instantiated and called as such:
 * $obj = RangeModule();
 * $obj->addRange($left, $right);
 * $ret_2 = $obj->queryRange($left, $right);
 * $obj->removeRange($left, $right);
 */
```

### swift
```swift

class RangeModule {

    init() {
        
    }
    
    func addRange(_ left: Int, _ right: Int) {
        
    }
    
    func queryRange(_ left: Int, _ right: Int) -> Bool {
        
    }
    
    func removeRange(_ left: Int, _ right: Int) {
        
    }
}

/**
 * Your RangeModule object will be instantiated and called as such:
 * let obj = RangeModule()
 * obj.addRange(left, right)
 * let ret_2: Bool = obj.queryRange(left, right)
 * obj.removeRange(left, right)
 */
```

### kotlin
```kotlin
class RangeModule() {

    fun addRange(left: Int, right: Int) {
        
    }

    fun queryRange(left: Int, right: Int): Boolean {
        
    }

    fun removeRange(left: Int, right: Int) {
        
    }

}

/**
 * Your RangeModule object will be instantiated and called as such:
 * var obj = RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */
```

### dart
```dart
class RangeModule {

  RangeModule() {
    
  }
  
  void addRange(int left, int right) {
    
  }
  
  bool queryRange(int left, int right) {
    
  }
  
  void removeRange(int left, int right) {
    
  }
}

/**
 * Your RangeModule object will be instantiated and called as such:
 * RangeModule obj = RangeModule();
 * obj.addRange(left,right);
 * bool param2 = obj.queryRange(left,right);
 * obj.removeRange(left,right);
 */
```

### golang
```golang
type RangeModule struct {
    
}


func Constructor() RangeModule {
    
}


func (this *RangeModule) AddRange(left int, right int)  {
    
}


func (this *RangeModule) QueryRange(left int, right int) bool {
    
}


func (this *RangeModule) RemoveRange(left int, right int)  {
    
}


/**
 * Your RangeModule object will be instantiated and called as such:
 * obj := Constructor();
 * obj.AddRange(left,right);
 * param_2 := obj.QueryRange(left,right);
 * obj.RemoveRange(left,right);
 */
```

### ruby
```ruby
class RangeModule
    def initialize()
        
    end


=begin
    :type left: Integer
    :type right: Integer
    :rtype: Void
=end
    def add_range(left, right)
        
    end


=begin
    :type left: Integer
    :type right: Integer
    :rtype: Boolean
=end
    def query_range(left, right)
        
    end


=begin
    :type left: Integer
    :type right: Integer
    :rtype: Void
=end
    def remove_range(left, right)
        
    end


end

# Your RangeModule object will be instantiated and called as such:
# obj = RangeModule.new()
# obj.add_range(left, right)
# param_2 = obj.query_range(left, right)
# obj.remove_range(left, right)
```

### scala
```scala
class RangeModule() {

    def addRange(left: Int, right: Int): Unit = {
        
    }

    def queryRange(left: Int, right: Int): Boolean = {
        
    }

    def removeRange(left: Int, right: Int): Unit = {
        
    }

}

/**
 * Your RangeModule object will be instantiated and called as such:
 * val obj = new RangeModule()
 * obj.addRange(left,right)
 * val param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */
```

### rust
```rust
struct RangeModule {

}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl RangeModule {

    fn new() -> Self {
        
    }
    
    fn add_range(&self, left: i32, right: i32) {
        
    }
    
    fn query_range(&self, left: i32, right: i32) -> bool {
        
    }
    
    fn remove_range(&self, left: i32, right: i32) {
        
    }
}

/**
 * Your RangeModule object will be instantiated and called as such:
 * let obj = RangeModule::new();
 * obj.add_range(left, right);
 * let ret_2: bool = obj.query_range(left, right);
 * obj.remove_range(left, right);
 */
```

### racket
```racket
(define range-module%
  (class object%
    (super-new)
    
    (init-field)
    
    ; add-range : exact-integer? exact-integer? -> void?
    (define/public (add-range left right)
      )
    ; query-range : exact-integer? exact-integer? -> boolean?
    (define/public (query-range left right)
      )
    ; remove-range : exact-integer? exact-integer? -> void?
    (define/public (remove-range left right)
      )))

;; Your range-module% object will be instantiated and called as such:
;; (define obj (new range-module%))
;; (send obj add-range left right)
;; (define param_2 (send obj query-range left right))
;; (send obj remove-range left right)
```

### erlang
```erlang
-spec range_module_init_() -> any().
range_module_init_() ->
  .

-spec range_module_add_range(Left :: integer(), Right :: integer()) -> any().
range_module_add_range(Left, Right) ->
  .

-spec range_module_query_range(Left :: integer(), Right :: integer()) -> boolean().
range_module_query_range(Left, Right) ->
  .

-spec range_module_remove_range(Left :: integer(), Right :: integer()) -> any().
range_module_remove_range(Left, Right) ->
  .


%% Your functions will be called as such:
%% range_module_init_(),
%% range_module_add_range(Left, Right),
%% Param_2 = range_module_query_range(Left, Right),
%% range_module_remove_range(Left, Right),

%% range_module_init_ will be called before every test case, in which you can do some necessary initializations.
```

### elixir
```elixir
defmodule RangeModule do
  @spec init_() :: any
  def init_() do
    
  end

  @spec add_range(left :: integer, right :: integer) :: any
  def add_range(left, right) do
    
  end

  @spec query_range(left :: integer, right :: integer) :: boolean
  def query_range(left, right) do
    
  end

  @spec remove_range(left :: integer, right :: integer) :: any
  def remove_range(left, right) do
    
  end
end

# Your functions will be called as such:
# RangeModule.init_()
# RangeModule.add_range(left, right)
# param_2 = RangeModule.query_range(left, right)
# RangeModule.remove_range(left, right)

# RangeModule.init_ will be called before every test case, in which you can do some necessary initializations.
```
