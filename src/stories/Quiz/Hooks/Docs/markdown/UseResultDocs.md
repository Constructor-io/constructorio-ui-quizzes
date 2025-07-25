# useResult

The `useResult` hook is designed to manage and manipulate quiz results, providing state management for variations and prop getters for seamless UI integration.

```tsx
    const { faceOutResult, onVariationClick, getQuizResultSwatchProps } = useResult(result);
```

### Props 

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `result` | `QuizResultDataPartial` | Yes | The initial quiz result data that will be managed by the hook. |
| `swatchImageKey` | `string` | No | Specifies the key to use for swatch images in the variation data. Defaults to `image_url` if not provided. |

### Returns

The `useResult` hook returns the following:

#### State

| Name | Type | Description |
|------|------|-------------|
| `faceOutResult` | `QuizResultDataPartial` | The current state of the quiz result, which can be updated based on user interactions with variations. |

#### Events

| Name | Type | Description |
|------|------|-------------|
| `onVariationClick` | `(variation: QuizResultDataPartial) => void` | A callback function that updates the `faceOutResult` state with the selected variation. |

#### Prop Getters

| Name | Type | Description |
|------|------|-------------|
| `getQuizResultSwatchProps` | `(variation: QuizResultDataPartial) => SwatchProps` | Returns all the necessary props for rendering swatch buttons, including styling, click handlers, and selected state. |
