---
title: Ant Design - Modal
date: "2022-04-27T03:22:23.847Z"
description: Learning about how ANT Design build their components.
author: Sawa
---

## Learning Ant Design Components ~ Modal

I am learning about how Ant Design build their components, and I am hoping that at the end of this learning experience, I would be a better programmer.


## Basic Component Structure

Task Specific Component structure [example from ConfirmDialog](https://github.com/ant-design/ant-design/blob/master/components/modal/ConfirmDialog.tsx) 

```
// any types and interfaces defined at the top
interfaces Foo extends BaseProp {}

// defining component itself
const Component = (props: Foo) {

  // destructure all props here even optional ones.
  const {
    okCancel,
    width,
    style
  } = props


  // Null checks, ternary, and setting default values done here
  const okCancel = 'okCancel' in props ? props.okCancel! : true;
  const width = props.width || 416;
  const style = props.style || {};
  ...


  // styling class name generated with prefix.
  const className = classNames(...)


  // Button component or any small component used in this component created here
  const cancelButton = <ActionButton>...</ActionButton>


  // combine imported and small components build within it here and returns the component
  return (...) 
}

```

## Modal status handling

A modal has status like warn, info, success, and noramally each status has its own icon. Each status has its own method which returns props already merged with base props. [example - ANT Design confirm](https://github.com/ant-design/ant-design/blob/master/components/modal/confirm.tsx)

```
// Confirm modal
export default function confirm(config: ModalFuncProps) {
  let currentConfig = { ...config, close, visible: true } as any;
  ...
  // method for confirm defined here
  function destroy () {}
  function render () {}
  function update () {}

  return {
    destroy: close,
    update,
  };
}

// each success, warn and info gets its own method like this to generate props
export function withSuccess(props: ModalFuncProps): ModalFuncProps {
  return {
    icon: <CheckCircleOutlined />,
    okCancel: false,
    ...props,
    type: 'success',
  };
}

```

then uses it like this

```
Modal.success = function successFn(props: ModalFuncProps) {
  return confirm(withSuccess(props));
}
```

## Other Interesting Findings

**TypeScript null checks**

This is about typescript, but I'll add this here too. I've used `?` null check for none method objects, somehow didn't realize we could do this `onCancel?.()` on methods. I've gotten `undefined` when an object doesn't have an optional proerty and try to use that in my code. Now I know 😃

code from [ANT Design Modal](https://github.com/ant-design/ant-design/blob/master/components/modal/Modal.tsx)
```
  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onCancel } = props;
    onCancel?.(e);
  };

```

**Use of React useRef, forwardRef and useImperativeHandle for a component with different contexts/child elements**

According to the react [documentation](https://reactjs.org/docs/hooks-reference.html#useref), `useRef` gets DOM's mutable vlaue and acts like a box with mutable value in it, and when you try to wrap a component with `ref` with another component, react doesn't pass the `ref` to the child component since `ref` is not a prop, more like a `key`, so you need to use `forwardRef` to make sure it passes refs to the child components. `useImperativeHandle` is also used along with those refs to 


ANT Design Modal component uses these concepts and passes methods and context references. I thought it was really interesting to see this piece of code

```
const ElementsHolder = React.memo(
  React.forwardRef<ElementsHolderRef>((_props, ref) => {
    const [elements, patchElement] = usePatchElement();
    React.useImperativeHandle(
      ref,
      () => ({
        patchElement,
      }),
      [],
    );
    return <>{elements}</>;
  }),
);
```

this function is exported out as `contextHolder` which is part of what we can use as a library user. ElementsHolder inserts children and when closed, it removed them. `usePatchElement` all it does is sets the child element and returns a method to remove.

```
  const [modal, contextHolder] = Modal.useModal();

  React.useEffect(() => {
    modal.confirm({
      // ...
    });
  }, []);

  return <div>{contextHolder}</div>;

```

It took me a while to understand this contextHolder part since it's being passed around a lot. Once I understood what each piece of code was doing, I started to notice that each key component does one thing which is definitely how we want to structure our code. I will try to learn about Input component next.