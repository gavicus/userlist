# Overview

Please add a write-up of your implementation here. Please also include any instructions needed to run the application.

This was a pretty straight-forward two-page react site. I used BrowserRouter and Link just because a growing project would likely need them.

I kept the page files themselves tiny to separate logic from display. This also makes unit testing much more simple.

I went back and forth about separating DetailPanel into its own component since its markup is pretty small and it needs several options to cover my use cases, but an evolving site would likely make this worth while.

I've been a big fan of naming all my site colors by usage rather than color name and keeping their definitions in :root. It's quick and easy to change the whole site this way.

Running the app is pretty simple. Once you're cloned and installed, localhost:<port> will take you straight to the user list.

Overall this has been a fun project to work on.
