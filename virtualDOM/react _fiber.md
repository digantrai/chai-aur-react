CHECK react fiber github:

What is createRoot method?
It is a method it will create a DOM-like structure. It compares between main DOM and it's DOM and only update
things that is updated in UI. The browser, removes entire DOM structure and repaints/webstructure created again the DOM which is also called page loading. JS tracks entire DOM structure and updates only the changed elements also called Virtual DOM.

Suppose, there is a stack of updates. Is it possible to stack updates into a bundle / a package and then update UI instead of updating on every calls?


React Fiber: 
React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over two years of research by the React team.

The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

***IMPORTANT--It's key features include the ability to pause,abort, or reuse work as new update are in; the abilit to assign priority to different types of updates; and new concurrent primitives.


What is reconciliation?

reconciliation
The algorithm React uses to differentiate one tree with another to determine which parts need to be changed. 
DOM is one tree and createRoot in react is another tree.

update
A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

***IMPORTANT---Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM.

The central idea of React's API is to think of updates as if they cause the entire app to re-render. This allows the developer to reason declaratively, rather than worry about how to efficiently transition the app from any particular state to another (A to B, B to C, C to A, and so on). 


A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

Although Fiber is a ground-up rewrite of the reconciler, the high-level algorithm described in the React docs will be largely the same. The key points are:

Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.

***IMPORTANT---Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."

The key points are:

In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.

Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.

A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

What is a fiber?
We're about to discuss the heart of React Fiber's architecture. Fibers are a much lower-level abstraction than application developers typically think about. If you find yourself frustrated in your attempts to understand it, don't feel discouraged. Keep trying and it will eventually make sense. (When you do finally get it, please suggest how to improve this section.)

Here we go!

We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

pause work and come back to it later.
assign priority to different types of work.
reuse previously completed work.
abort work if it's no longer needed.


