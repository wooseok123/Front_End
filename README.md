자주하는 실수들

1. relative vs absoulte 
-absolute 속성을 사용하고 싶다면 부모 요소에 relative,fixed,relatvie 중 하나의 속성이 지정되어 있어야 한다.
-보통 relative 속성을 부모에 지정하고 자식 요소에 absoulte 속성값을 할당하여 서로 겹치거나 위치를 옮길 수 있다

2. css에서 id vs class
-id는 container 처럼 하나 밖에 가지지 못하는 것 (menu, top, container, footer, body..)
-class는 그 안에 다양한 요소를 가지는 div (wrapper, title)

3. css의 부모-자식 간 적용
-만약 부모 태그에서 margin 등의 값을 입력했다면 자식태그에 적용되지만, 만약 하위 태그에도 또 css를 먹이면 기본값이 되어버린다.
-그말인 즉슨, 부모 태그에서 margin 값 주고 다시 하위 자식 태그 css를 입력하면 margin 값은 없어진다는 얘기이다. 

4. word-break 속성
-word-break : keep-all -> 단어 단위로 줄바꿈하게 해준다(한,중,일 텍스트에서 사용)
