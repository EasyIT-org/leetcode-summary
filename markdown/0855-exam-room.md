# 855. Exam Room

- Difficulty: Medium
- Topics: Design, Heap (Priority Queue), Ordered Set
- Slug: exam-room
- Problem ID: 885

## Description
There is an exam room with n seats in a single row labeled from 0 to n - 1.
When a student enters the room, they must sit in the seat that maximizes the distance to the closest person. If there are multiple such seats, they sit in the seat with the lowest number. If no one is in the room, then the student sits at seat number 0.
Design a class that simulates the mentioned exam room.
Implement the ExamRoom class:
Example 1:
Constraints:

## Examples
### Example 1
```text
Input
["ExamRoom", "seat", "seat", "seat", "seat", "leave", "seat"]
[[10], [], [], [], [], [4], []]
Output
[null, 0, 9, 4, 2, null, 5]

Explanation
ExamRoom examRoom = new ExamRoom(10);
examRoom.seat(); // return 0, no one is in the room, then the student sits at seat number 0.
examRoom.seat(); // return 9, the student sits at the last seat number 9.
examRoom.seat(); // return 4, the student sits at the last seat number 4.
examRoom.seat(); // return 2, the student sits at the last seat number 2.
examRoom.leave(4);
examRoom.seat(); // return 5, the student sits at the last seat number 5.
```


## Constraints
- 1 <= n <= 109
- It is guaranteed that there is a student sitting at seat p.
- At most 104 calls will be made to seat and leave.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class ExamRoom {
public:
    ExamRoom(int n) {
        
    }
    
    int seat() {
        
    }
    
    void leave(int p) {
        
    }
};

/**
 * Your ExamRoom object will be instantiated and called as such:
 * ExamRoom* obj = new ExamRoom(n);
 * int param_1 = obj->seat();
 * obj->leave(p);
 */
```

### java
```java
class ExamRoom {

    public ExamRoom(int n) {
        
    }
    
    public int seat() {
        
    }
    
    public void leave(int p) {
        
    }
}

/**
 * Your ExamRoom object will be instantiated and called as such:
 * ExamRoom obj = new ExamRoom(n);
 * int param_1 = obj.seat();
 * obj.leave(p);
 */
```

### python
```python
class ExamRoom(object):

    def __init__(self, n):
        """
        :type n: int
        """
        

    def seat(self):
        """
        :rtype: int
        """
        

    def leave(self, p):
        """
        :type p: int
        :rtype: None
        """
        


# Your ExamRoom object will be instantiated and called as such:
# obj = ExamRoom(n)
# param_1 = obj.seat()
# obj.leave(p)
```

### python3
```python3
class ExamRoom:

    def __init__(self, n: int):
        

    def seat(self) -> int:
        

    def leave(self, p: int) -> None:
        


# Your ExamRoom object will be instantiated and called as such:
# obj = ExamRoom(n)
# param_1 = obj.seat()
# obj.leave(p)
```

### c
```c



typedef struct {
    
} ExamRoom;


ExamRoom* examRoomCreate(int n) {
    
}

int examRoomSeat(ExamRoom* obj) {
    
}

void examRoomLeave(ExamRoom* obj, int p) {
    
}

void examRoomFree(ExamRoom* obj) {
    
}

/**
 * Your ExamRoom struct will be instantiated and called as such:
 * ExamRoom* obj = examRoomCreate(n);
 * int param_1 = examRoomSeat(obj);
 
 * examRoomLeave(obj, p);
 
 * examRoomFree(obj);
*/
```

### csharp
```csharp
public class ExamRoom {

    public ExamRoom(int n) {
        
    }
    
    public int Seat() {
        
    }
    
    public void Leave(int p) {
        
    }
}

/**
 * Your ExamRoom object will be instantiated and called as such:
 * ExamRoom obj = new ExamRoom(n);
 * int param_1 = obj.Seat();
 * obj.Leave(p);
 */
```

### javascript
```javascript
/**
 * @param {number} n
 */
var ExamRoom = function(n) {
    
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function() {
    
};

/** 
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {
    
};

/** 
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
```

### typescript
```typescript
class ExamRoom {
    constructor(n: number) {
        
    }

    seat(): number {
        
    }

    leave(p: number): void {
        
    }
}

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
```

### php
```php
class ExamRoom {
    /**
     * @param Integer $n
     */
    function __construct($n) {
        
    }
  
    /**
     * @return Integer
     */
    function seat() {
        
    }
  
    /**
     * @param Integer $p
     * @return NULL
     */
    function leave($p) {
        
    }
}

/**
 * Your ExamRoom object will be instantiated and called as such:
 * $obj = ExamRoom($n);
 * $ret_1 = $obj->seat();
 * $obj->leave($p);
 */
```

### swift
```swift

class ExamRoom {

    init(_ n: Int) {
        
    }
    
    func seat() -> Int {
        
    }
    
    func leave(_ p: Int) {
        
    }
}

/**
 * Your ExamRoom object will be instantiated and called as such:
 * let obj = ExamRoom(n)
 * let ret_1: Int = obj.seat()
 * obj.leave(p)
 */
```

### kotlin
```kotlin
class ExamRoom(n: Int) {

    fun seat(): Int {
        
    }

    fun leave(p: Int) {
        
    }

}

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
```

### dart
```dart
class ExamRoom {

  ExamRoom(int n) {
    
  }
  
  int seat() {
    
  }
  
  void leave(int p) {
    
  }
}

/**
 * Your ExamRoom object will be instantiated and called as such:
 * ExamRoom obj = ExamRoom(n);
 * int param1 = obj.seat();
 * obj.leave(p);
 */
```

### golang
```golang
type ExamRoom struct {
    
}


func Constructor(n int) ExamRoom {
    
}


func (this *ExamRoom) Seat() int {
    
}


func (this *ExamRoom) Leave(p int)  {
    
}


/**
 * Your ExamRoom object will be instantiated and called as such:
 * obj := Constructor(n);
 * param_1 := obj.Seat();
 * obj.Leave(p);
 */
```

### ruby
```ruby
class ExamRoom

=begin
    :type n: Integer
=end
    def initialize(n)
        
    end


=begin
    :rtype: Integer
=end
    def seat()
        
    end


=begin
    :type p: Integer
    :rtype: Void
=end
    def leave(p)
        
    end


end

# Your ExamRoom object will be instantiated and called as such:
# obj = ExamRoom.new(n)
# param_1 = obj.seat()
# obj.leave(p)
```

### scala
```scala
class ExamRoom(_n: Int) {

    def seat(): Int = {
        
    }

    def leave(p: Int): Unit = {
        
    }

}

/**
 * Your ExamRoom object will be instantiated and called as such:
 * val obj = new ExamRoom(n)
 * val param_1 = obj.seat()
 * obj.leave(p)
 */
```

### rust
```rust
struct ExamRoom {

}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl ExamRoom {

    fn new(n: i32) -> Self {
        
    }
    
    fn seat(&self) -> i32 {
        
    }
    
    fn leave(&self, p: i32) {
        
    }
}

/**
 * Your ExamRoom object will be instantiated and called as such:
 * let obj = ExamRoom::new(n);
 * let ret_1: i32 = obj.seat();
 * obj.leave(p);
 */
```

### racket
```racket
(define exam-room%
  (class object%
    (super-new)
    
    ; n : exact-integer?
    (init-field
      n)
    
    ; seat : -> exact-integer?
    (define/public (seat)
      )
    ; leave : exact-integer? -> void?
    (define/public (leave p)
      )))

;; Your exam-room% object will be instantiated and called as such:
;; (define obj (new exam-room% [n n]))
;; (define param_1 (send obj seat))
;; (send obj leave p)
```

### erlang
```erlang
-spec exam_room_init_(N :: integer()) -> any().
exam_room_init_(N) ->
  .

-spec exam_room_seat() -> integer().
exam_room_seat() ->
  .

-spec exam_room_leave(P :: integer()) -> any().
exam_room_leave(P) ->
  .


%% Your functions will be called as such:
%% exam_room_init_(N),
%% Param_1 = exam_room_seat(),
%% exam_room_leave(P),

%% exam_room_init_ will be called before every test case, in which you can do some necessary initializations.
```

### elixir
```elixir
defmodule ExamRoom do
  @spec init_(n :: integer) :: any
  def init_(n) do
    
  end

  @spec seat() :: integer
  def seat() do
    
  end

  @spec leave(p :: integer) :: any
  def leave(p) do
    
  end
end

# Your functions will be called as such:
# ExamRoom.init_(n)
# param_1 = ExamRoom.seat()
# ExamRoom.leave(p)

# ExamRoom.init_ will be called before every test case, in which you can do some necessary initializations.
```
