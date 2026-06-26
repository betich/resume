<script lang="ts">
  import Intro from "./Intro.svelte"
  import Work from "./Work.svelte"
  import Hideable from "./Hideable.svelte"
  import {
    activityExperiences,
    contributions,
    educations,
    interests,
    introData,
    projects,
    sourceLink,
    technologies,
    workExperiences,
    type Tag,
  } from "../data"
  const dataLink = `${sourceLink}/blob/main/src/data.ts`

  // "resume" is a curated overview (its own tag); the specific tags produce a
  // focused CV that also renames the print output / saved PDF.
  type Filter = Tag
  export let initialFilter: Filter = "resume"
  let filter: Filter = initialFilter
  const filters: { value: Filter; label: string }[] = [
    { value: "resume", label: "Résumé" },
    { value: "robotics", label: "Robotics" },
    { value: "swe", label: "Software Engineering" },
    { value: "design", label: "Design & Marketing" },
  ]
  const docTitles: Record<Filter, string> = {
    resume: "Résumé",
    robotics: "Robotics CV",
    swe: "Software Engineering CV",
    design: "Design & Marketing CV",
  }

  // Reference `filter` directly here so Svelte tracks it as a dependency.
  // Non-matching items aren't removed from the DOM — they're passed to the
  // baked-in `hide` feature (greyed on screen, omitted on print).
  $: matches = (tags: Tag[] = []) => tags.includes(filter)

  $: docTitle = docTitles[filter]
  // Per-version short link, e.g. resume.betich.me/robotics (root for résumé).
  $: linkPath = filter === "resume" ? "" : `/${filter}`
  $: onlineLabel = `resume.betich.me${linkPath}`
  $: onlineHref = `https://resume.betich.me${linkPath}`
  // Updates the browser tab + the suggested filename when saving as PDF.
  $: if (typeof document !== "undefined") document.title = `${introData.name} — ${docTitle}`
  // Keep the address bar in sync so the printed link matches what's shown.
  $: if (typeof window !== "undefined") window.history.replaceState(null, "", linkPath || "/")
</script>

<header
  class="web-only text-center p-4 sm:p-6 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-white w-screen"
>
  <h1 class="text-[20pt]">Resumette</h1>

  <nav class="flex flex-wrap gap-2 justify-center mt-3 mb-2" aria-label="Resume focus filter">
    {#each filters as f}
      <button
        on:click={() => (filter = f.value)}
        class="px-3 py-1 rounded-full border text-sm transition-colors"
        class:bg-white={filter === f.value}
        class:text-gray-900={filter === f.value}
        class:border-white={filter === f.value}
        class:text-gray-200={filter !== f.value}
        class:border-gray-500={filter !== f.value}
        aria-pressed={filter === f.value}
      >
        {f.label}
      </button>
    {/each}
  </nav>
  <p class="text-sm text-gray-300 mb-2">
    Viewing <strong class="text-white">{docTitle}</strong>{filter === "resume"
      ? " (overview of everything)"
      : " — a focused CV"}.
  </p>

  <h3>
    <button on:click={() => window.print()} class="underline text-lg">[Print]</button>
  </h3>
  <p>
    Printer-friendly standard résumé, any HTML tags with <code>web-only</code> CSS class will be hidden on print.
  </p>
  <p>You can click at any sections or lines hide some information before printing.</p>
  <p>
    Modified from <a href="https://github.com/narze" target="_blank" rel="noopener">narze's</a>
    <a href="https://github.com/narze/resume/tree/main" target="_blank" rel="noopener">resume template</a>.
  </p>
  <a href={sourceLink} target="_blank" rel="noopener">[Source]</a>
  <a href={dataLink} target="_blank" rel="noopener">[Data]</a>
</header>

<main class="text-center p-4 m-0 md:m-8 xl:mx-auto max-w-screen-xl">
  <div class="print-only text-right text-[8pt] mb-1">
    <span class="uppercase tracking-wider">{docTitle}</span>
    · View online at
    <a href={onlineHref} target="_blank" rel="noopener">{onlineLabel}</a>
  </div>

  <Intro {...introData} />

  <section>
    <Hideable>
      <h2 class="text-2xl print:text-[20pt] uppercase text-left">Technologies, Languages and Tools</h2>
      <hr />
      <ul class="text-left list-disc pl-8">
        {#each technologies as tech}
          <Hideable hide={!matches(tech.tags)}>
            <li>
              <span class="w-28 inline-block">{tech.section}</span>
              <span>{tech.details}</span>
            </li>
          </Hideable>
        {/each}
      </ul>
    </Hideable>
  </section>

  <section>
    <Hideable>
      <h2 class="text-2xl print:text-[20pt] uppercase text-left">Education</h2>
      <hr />

      <ul class="text-left list-disc pl-8">
        {#each educations as edu}
          <Hideable hide={!matches(edu.tags)}>
            <li>
              <strong>{edu.head}</strong>, {edu.details}
            </li>
          </Hideable>
        {/each}
      </ul>
    </Hideable>
  </section>

  <section>
    <Hideable>
      <h2 class="text-2xl print:text-[20pt] uppercase text-left">Work Experience</h2>
      <hr />

      {#each workExperiences as exp}
        <Work {...exp} />
      {/each}
    </Hideable>
  </section>

  <section>
    <Hideable>
      <h2 class="text-2xl print:text-[20pt] uppercase text-left">Student Activity Experience</h2>
      <hr />

      {#each activityExperiences as exp}
        <Work {...exp} hide={!matches(exp.tags)} />
      {/each}
    </Hideable>
  </section>

  <section>
    <Hideable>
      <h2 class="text-2xl print:text-[20pt] uppercase text-left">Personal Projects</h2>
      <hr />

      <ul class="text-left list-disc pl-8">
        {#each projects as project}
          <Hideable hide={project.hide || !matches(project.tags)}>
            <li>
              <strong>{project.name}</strong>
              - {project.details}
              {#if project.url}
                <a href="https://{project.url}" target="_blank" rel="noreferrer"><strong>{project.url}</strong></a>
              {/if}
            </li>
          </Hideable>
        {/each}
      </ul>
    </Hideable>
  </section>

  <section>
    <Hideable>
      <h2 class="text-2xl print:text-[20pt] uppercase text-left">Contributions</h2>
      <hr />

      <ul class="text-left list-disc pl-8">
        {#each contributions as project}
          <Hideable hide={project.hide || !matches(project.tags)}>
            <li>
              <strong>{project.name}</strong>
              - {project.details}
              {#if project.url}
                <a href="https://{project.url}" target="_blank" rel="noreferrer"><strong>{project.url}</strong></a>
              {/if}
            </li>
          </Hideable>
        {/each}
      </ul>
    </Hideable>
  </section>

  <section>
    <Hideable>
      <h2 class="text-2xl print:text-[20pt] uppercase text-left">Interests</h2>
      <hr />

      <ul class="text-left list-disc pl-8">
        {#each interests as interest}
          <Hideable hide={!matches(interest.tags)}>
            <li>
              {interest.text}
            </li>
          </Hideable>
        {/each}
      </ul>
    </Hideable>
  </section>

  <footer class="print-only">
    (View this CV online at <a href={onlineHref} target="_blank" rel="noopener">{onlineLabel}</a>
    or see the <a href={sourceLink} target="_blank" rel="noopener">source</a>)
  </footer>
</main>

<style lang="postcss">
  * {
    font-family: "Inter", "Roboto", "Helvetica", "Arial", sans-serif;
  }

  main {
    overflow-x: hidden;
  }

  a {
    text-decoration: underline;
  }

  section {
    @apply my-4;
  }

  section h2 {
    @apply font-semibold;
  }

  section hr {
    @apply mt-0 mb-2;
    border-color: darkgrey;
  }

  :global(.print-only) {
    display: none;
  }

  @media print {
    * {
      font-size: 7.5pt;
      line-height: 0.8rem;
      font-family: "Inter", "Roboto", "Helvetica", "Arial", sans-serif;
    }

    :global(.print-only) {
      display: inherit;
    }

    :global(.web-only) {
      display: none;
    }

    ul {
      @apply pl-6;
    }

    section {
      @apply my-2;
    }

    section hr {
      @apply mt-0 mb-1;
    }

    main {
      margin: 0 0;
      padding: 0;
    }
  }
</style>
