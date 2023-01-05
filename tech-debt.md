# Tech Debt

* Add Storybook
* Add stories for each component
* Infer types from client JS


# Open Questions

* The "select" type questions might have a cover image but it's not displayed in mock-ups. Should we support it? If yes, where should it go?
* Should we have a "themed" version along with the default skeleton?
* Do we want to support consumers to pass in custom ids to target deeper divs in our components?
* Is there an accessibility guide we can follow?
* Since our css won't be scoped, would it make sense to append a prefix `cio-` to our css classes to avoid unintentional conflicts? Could possibly be done with a post-processor.

# Concerns
* If the quiz-core types changes, we'll have to update types here as well. Wonder if there's a way to sync the two.
* React's functional defaultProps might end up being deprecated. But they've been saying that since 2019. [GitHub Issue](https://github.com/facebook/react/pull/16210)

# Blocked
* `OpenTextQuestion` component should use `QuestionInputText` component if/when the `label` attribute becomes available