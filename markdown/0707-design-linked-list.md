# 707. Design Linked List

- Difficulty: Medium
- Topics: Linked List, Design
- Slug: design-linked-list
- Problem ID: 838

## Description
Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.
Implement the MyLinkedList class:
Example 1:
Constraints:

## Examples
### Example 1
```text
Input
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
[[], [1], [3], [1, 2], [1], [1], [1]]
Output
[null, null, null, null, 2, null, 3]

Explanation
MyLinkedList myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
myLinkedList.get(1);              // return 2
myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
myLinkedList.get(1);              // return 3
```


## Constraints
- 0 <= index, val <= 1000
- Please do not use the built-in LinkedList library.
- At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and deleteAtIndex.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class MyLinkedList {
public:
    MyLinkedList() {
        
    }
    
    int get(int index) {
        
    }
    
    void addAtHead(int val) {
        
    }
    
    void addAtTail(int val) {
        
    }
    
    void addAtIndex(int index, int val) {
        
    }
    
    void deleteAtIndex(int index) {
        
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList* obj = new MyLinkedList();
 * int param_1 = obj->get(index);
 * obj->addAtHead(val);
 * obj->addAtTail(val);
 * obj->addAtIndex(index,val);
 * obj->deleteAtIndex(index);
 */
```

### java
```java
class MyLinkedList {

    public MyLinkedList() {
        
    }
    
    public int get(int index) {
        
    }
    
    public void addAtHead(int val) {
        
    }
    
    public void addAtTail(int val) {
        
    }
    
    public void addAtIndex(int index, int val) {
        
    }
    
    public void deleteAtIndex(int index) {
        
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */
```

### python
```python
class MyLinkedList(object):

    def __init__(self):
        

    def get(self, index):
        """
        :type index: int
        :rtype: int
        """
        

    def addAtHead(self, val):
        """
        :type val: int
        :rtype: None
        """
        

    def addAtTail(self, val):
        """
        :type val: int
        :rtype: None
        """
        

    def addAtIndex(self, index, val):
        """
        :type index: int
        :type val: int
        :rtype: None
        """
        

    def deleteAtIndex(self, index):
        """
        :type index: int
        :rtype: None
        """
        


# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList()
# param_1 = obj.get(index)
# obj.addAtHead(val)
# obj.addAtTail(val)
# obj.addAtIndex(index,val)
# obj.deleteAtIndex(index)
```

### python3
```python3
class MyLinkedList:

    def __init__(self):
        

    def get(self, index: int) -> int:
        

    def addAtHead(self, val: int) -> None:
        

    def addAtTail(self, val: int) -> None:
        

    def addAtIndex(self, index: int, val: int) -> None:
        

    def deleteAtIndex(self, index: int) -> None:
        


# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList()
# param_1 = obj.get(index)
# obj.addAtHead(val)
# obj.addAtTail(val)
# obj.addAtIndex(index,val)
# obj.deleteAtIndex(index)
```

### c
```c



typedef struct {
    
} MyLinkedList;


MyLinkedList* myLinkedListCreate() {
    
}

int myLinkedListGet(MyLinkedList* obj, int index) {
    
}

void myLinkedListAddAtHead(MyLinkedList* obj, int val) {
    
}

void myLinkedListAddAtTail(MyLinkedList* obj, int val) {
    
}

void myLinkedListAddAtIndex(MyLinkedList* obj, int index, int val) {
    
}

void myLinkedListDeleteAtIndex(MyLinkedList* obj, int index) {
    
}

void myLinkedListFree(MyLinkedList* obj) {
    
}

/**
 * Your MyLinkedList struct will be instantiated and called as such:
 * MyLinkedList* obj = myLinkedListCreate();
 * int param_1 = myLinkedListGet(obj, index);
 
 * myLinkedListAddAtHead(obj, val);
 
 * myLinkedListAddAtTail(obj, val);
 
 * myLinkedListAddAtIndex(obj, index, val);
 
 * myLinkedListDeleteAtIndex(obj, index);
 
 * myLinkedListFree(obj);
*/
```

### csharp
```csharp
public class MyLinkedList {

    public MyLinkedList() {
        
    }
    
    public int Get(int index) {
        
    }
    
    public void AddAtHead(int val) {
        
    }
    
    public void AddAtTail(int val) {
        
    }
    
    public void AddAtIndex(int index, int val) {
        
    }
    
    public void DeleteAtIndex(int index) {
        
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.Get(index);
 * obj.AddAtHead(val);
 * obj.AddAtTail(val);
 * obj.AddAtIndex(index,val);
 * obj.DeleteAtIndex(index);
 */
```

### javascript
```javascript

var MyLinkedList = function() {
    
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
```

### typescript
```typescript
class MyLinkedList {
    constructor() {
        
    }

    get(index: number): number {
        
    }

    addAtHead(val: number): void {
        
    }

    addAtTail(val: number): void {
        
    }

    addAtIndex(index: number, val: number): void {
        
    }

    deleteAtIndex(index: number): void {
        
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
```

### php
```php
class MyLinkedList {
    /**
     */
    function __construct() {
        
    }
  
    /**
     * @param Integer $index
     * @return Integer
     */
    function get($index) {
        
    }
  
    /**
     * @param Integer $val
     * @return NULL
     */
    function addAtHead($val) {
        
    }
  
    /**
     * @param Integer $val
     * @return NULL
     */
    function addAtTail($val) {
        
    }
  
    /**
     * @param Integer $index
     * @param Integer $val
     * @return NULL
     */
    function addAtIndex($index, $val) {
        
    }
  
    /**
     * @param Integer $index
     * @return NULL
     */
    function deleteAtIndex($index) {
        
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * $obj = MyLinkedList();
 * $ret_1 = $obj->get($index);
 * $obj->addAtHead($val);
 * $obj->addAtTail($val);
 * $obj->addAtIndex($index, $val);
 * $obj->deleteAtIndex($index);
 */
```

### swift
```swift

class MyLinkedList {

    init() {
        
    }
    
    func get(_ index: Int) -> Int {
        
    }
    
    func addAtHead(_ val: Int) {
        
    }
    
    func addAtTail(_ val: Int) {
        
    }
    
    func addAtIndex(_ index: Int, _ val: Int) {
        
    }
    
    func deleteAtIndex(_ index: Int) {
        
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * let obj = MyLinkedList()
 * let ret_1: Int = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index, val)
 * obj.deleteAtIndex(index)
 */
```

### kotlin
```kotlin
class MyLinkedList() {

    fun get(index: Int): Int {
        
    }

    fun addAtHead(`val`: Int) {
        
    }

    fun addAtTail(`val`: Int) {
        
    }

    fun addAtIndex(index: Int, `val`: Int) {
        
    }

    fun deleteAtIndex(index: Int) {
        
    }

}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(`val`)
 * obj.addAtTail(`val`)
 * obj.addAtIndex(index,`val`)
 * obj.deleteAtIndex(index)
 */
```

### dart
```dart
class MyLinkedList {

  MyLinkedList() {
    
  }
  
  int get(int index) {
    
  }
  
  void addAtHead(int val) {
    
  }
  
  void addAtTail(int val) {
    
  }
  
  void addAtIndex(int index, int val) {
    
  }
  
  void deleteAtIndex(int index) {
    
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = MyLinkedList();
 * int param1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */
```

### golang
```golang
type MyLinkedList struct {
    
}


func Constructor() MyLinkedList {
    
}


func (this *MyLinkedList) Get(index int) int {
    
}


func (this *MyLinkedList) AddAtHead(val int)  {
    
}


func (this *MyLinkedList) AddAtTail(val int)  {
    
}


func (this *MyLinkedList) AddAtIndex(index int, val int)  {
    
}


func (this *MyLinkedList) DeleteAtIndex(index int)  {
    
}


/**
 * Your MyLinkedList object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Get(index);
 * obj.AddAtHead(val);
 * obj.AddAtTail(val);
 * obj.AddAtIndex(index,val);
 * obj.DeleteAtIndex(index);
 */
```

### ruby
```ruby
class MyLinkedList
    def initialize()
        
    end


=begin
    :type index: Integer
    :rtype: Integer
=end
    def get(index)
        
    end


=begin
    :type val: Integer
    :rtype: Void
=end
    def add_at_head(val)
        
    end


=begin
    :type val: Integer
    :rtype: Void
=end
    def add_at_tail(val)
        
    end


=begin
    :type index: Integer
    :type val: Integer
    :rtype: Void
=end
    def add_at_index(index, val)
        
    end


=begin
    :type index: Integer
    :rtype: Void
=end
    def delete_at_index(index)
        
    end


end

# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList.new()
# param_1 = obj.get(index)
# obj.add_at_head(val)
# obj.add_at_tail(val)
# obj.add_at_index(index, val)
# obj.delete_at_index(index)
```

### scala
```scala
class MyLinkedList() {

    def get(index: Int): Int = {
        
    }

    def addAtHead(`val`: Int): Unit = {
        
    }

    def addAtTail(`val`: Int): Unit = {
        
    }

    def addAtIndex(index: Int, `val`: Int): Unit = {
        
    }

    def deleteAtIndex(index: Int): Unit = {
        
    }

}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * val obj = new MyLinkedList()
 * val param_1 = obj.get(index)
 * obj.addAtHead(`val`)
 * obj.addAtTail(`val`)
 * obj.addAtIndex(index,`val`)
 * obj.deleteAtIndex(index)
 */
```

### rust
```rust
struct MyLinkedList {

}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MyLinkedList {

    fn new() -> Self {
        
    }
    
    fn get(&self, index: i32) -> i32 {
        
    }
    
    fn add_at_head(&self, val: i32) {
        
    }
    
    fn add_at_tail(&self, val: i32) {
        
    }
    
    fn add_at_index(&self, index: i32, val: i32) {
        
    }
    
    fn delete_at_index(&self, index: i32) {
        
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * let obj = MyLinkedList::new();
 * let ret_1: i32 = obj.get(index);
 * obj.add_at_head(val);
 * obj.add_at_tail(val);
 * obj.add_at_index(index, val);
 * obj.delete_at_index(index);
 */
```

### racket
```racket
(define my-linked-list%
  (class object%
    (super-new)
    
    (init-field)
    
    ; get : exact-integer? -> exact-integer?
    (define/public (get index)
      )
    ; add-at-head : exact-integer? -> void?
    (define/public (add-at-head val)
      )
    ; add-at-tail : exact-integer? -> void?
    (define/public (add-at-tail val)
      )
    ; add-at-index : exact-integer? exact-integer? -> void?
    (define/public (add-at-index index val)
      )
    ; delete-at-index : exact-integer? -> void?
    (define/public (delete-at-index index)
      )))

;; Your my-linked-list% object will be instantiated and called as such:
;; (define obj (new my-linked-list%))
;; (define param_1 (send obj get index))
;; (send obj add-at-head val)
;; (send obj add-at-tail val)
;; (send obj add-at-index index val)
;; (send obj delete-at-index index)
```

### erlang
```erlang
-spec my_linked_list_init_() -> any().
my_linked_list_init_() ->
  .

-spec my_linked_list_get(Index :: integer()) -> integer().
my_linked_list_get(Index) ->
  .

-spec my_linked_list_add_at_head(Val :: integer()) -> any().
my_linked_list_add_at_head(Val) ->
  .

-spec my_linked_list_add_at_tail(Val :: integer()) -> any().
my_linked_list_add_at_tail(Val) ->
  .

-spec my_linked_list_add_at_index(Index :: integer(), Val :: integer()) -> any().
my_linked_list_add_at_index(Index, Val) ->
  .

-spec my_linked_list_delete_at_index(Index :: integer()) -> any().
my_linked_list_delete_at_index(Index) ->
  .


%% Your functions will be called as such:
%% my_linked_list_init_(),
%% Param_1 = my_linked_list_get(Index),
%% my_linked_list_add_at_head(Val),
%% my_linked_list_add_at_tail(Val),
%% my_linked_list_add_at_index(Index, Val),
%% my_linked_list_delete_at_index(Index),

%% my_linked_list_init_ will be called before every test case, in which you can do some necessary initializations.
```

### elixir
```elixir
defmodule MyLinkedList do
  @spec init_() :: any
  def init_() do
    
  end

  @spec get(index :: integer) :: integer
  def get(index) do
    
  end

  @spec add_at_head(val :: integer) :: any
  def add_at_head(val) do
    
  end

  @spec add_at_tail(val :: integer) :: any
  def add_at_tail(val) do
    
  end

  @spec add_at_index(index :: integer, val :: integer) :: any
  def add_at_index(index, val) do
    
  end

  @spec delete_at_index(index :: integer) :: any
  def delete_at_index(index) do
    
  end
end

# Your functions will be called as such:
# MyLinkedList.init_()
# param_1 = MyLinkedList.get(index)
# MyLinkedList.add_at_head(val)
# MyLinkedList.add_at_tail(val)
# MyLinkedList.add_at_index(index, val)
# MyLinkedList.delete_at_index(index)

# MyLinkedList.init_ will be called before every test case, in which you can do some necessary initializations.
```
