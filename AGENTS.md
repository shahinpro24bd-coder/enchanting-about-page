<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the portfolio at the TanStack index route, with browser-safe project data in a dedicated module, to preserve native routing and keep the page focused.
- Store imported portfolio media as optimized WebP asset pointers; this reduces transfer size and keeps binary assets out of the source archive.
- Use CSS animations and an IntersectionObserver reveal component with reduced-motion support instead of an animation dependency to keep the portfolio lightweight and accessible.
- Isolate browser-only scroll progress and pointer tilt in the portfolio motion wrapper, with effect cleanup and reduced-motion guards, to keep SSR safe and motion accessible.
