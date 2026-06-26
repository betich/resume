<script lang="ts">
  import Intro from "./Intro.svelte"
  import Work from "./Work.svelte"
  import Hideable from "./Hideable.svelte"
  import {
    activityExperiences,
    contributions,
    educations,
    fullVersionLink,
    interests,
    introData,
    projects,
    sourceLink,
    technologies,
    workExperiences,
    type Tag,
  } from "../data"
  const dataLink = `${sourceLink}/blob/main/src/data.ts`

  type Filter = Tag | "all"
  let filter: Filter = "all"
  const filters: { value: Filter; label: string }[] = [
    { value: "all", label: "All" },
    { value: "robotics", label: "Robotics" },
    { value: "swe", label: "Software Engineering" },
    { value: "design", label: "Design & Marketing" },
  ]
  const matches = (tags: Tag[] = []) => filter === "all" || tags.includes(filter as Tag)

  $: fTechnologies = technologies.filter((t) => matches(t.tags))
  $: fEducations = educations.filter((e) => matches(e.tags))
  $: fWorkExperiences = workExperiences.filter((e) => matches(e.tags))
  $: fActivityExperiences = activityExperiences.filter((e) => matches(e.tags))
  $: fProjects = projects.filter((p) => matches(p.tags))
  $: fContributions = contributions.filter((p) => matches(p.tags))
  $: fInterests = interests.filter((i) => matches(i.tags))
</script>

<header
  class="web-only text-center p-4 sm:p-6 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-white w-screen"
>
  <h1 class="text-[20pt]">Resumette</h1>
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
  <Intro {...introData} />

  <nav class="web-only flex flex-wrap gap-2 justify-center my-4" aria-label="Resume focus filter">
    {#each filters as f}
      <button
        on:click={() => (filter = f.value)}
        class="px-3 py-1 rounded-full border text-sm transition-colors"
        class:bg-gray-900={filter === f.value}
        class:text-white={filter === f.value}
        class:border-gray-900={filter === f.value}
        class:text-gray-600={filter !== f.value}
        class:border-gray-300={filter !== f.value}
        aria-pressed={filter === f.value}
      >
        {f.label}
      </button>
    {/each}
  </nav>

  {#if fTechnologies.length}
    <section>
      <Hideable>
        <h2 class="text-2xl print:text-[20pt] uppercase text-left">Technologies, Languages and Tools</h2>
        <hr />
        <ul class="text-left list-disc pl-8">
          {#each fTechnologies as tech}
            <Hideable>
              <li>
                <span class="w-28 inline-block">{tech.section}</span>
                <span>{tech.details}</span>
              </li>
            </Hideable>
          {/each}
        </ul>
      </Hideable>
    </section>
  {/if}

  {#if fEducations.length}
    <section>
      <Hideable>
        <h2 class="text-2xl print:text-[20pt] uppercase text-left">Education</h2>
        <hr />

        <ul class="text-left list-disc pl-8">
          {#each fEducations as edu}
            <Hideable>
              <li>
                <strong>{edu.head}</strong>, {edu.details}
              </li>
            </Hideable>
          {/each}
        </ul>
      </Hideable>
    </section>
  {/if}

  {#if fWorkExperiences.length}
    <section>
      <Hideable>
        <h2 class="text-2xl print:text-[20pt] uppercase text-left">Work Experience</h2>
        <hr />

        {#each fWorkExperiences as exp}
          <Work {...exp} />
        {/each}
      </Hideable>
    </section>
  {/if}

  {#if fActivityExperiences.length}
    <section>
      <Hideable>
        <h2 class="text-2xl print:text-[20pt] uppercase text-left">Student Activity Experience</h2>
        <hr />

        {#each fActivityExperiences as exp}
          <Work {...exp} />
        {/each}
      </Hideable>
    </section>
  {/if}

  {#if fProjects.length}
    <section>
      <Hideable>
        <h2 class="text-2xl print:text-[20pt] uppercase text-left">Personal Projects</h2>
        <hr />

        <ul class="text-left list-disc pl-8">
          {#each fProjects as project}
            <Hideable hide={project.hide}>
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
  {/if}

  {#if fContributions.length}
    <section>
      <Hideable>
        <h2 class="text-2xl print:text-[20pt] uppercase text-left">Contributions</h2>
        <hr />

        <ul class="text-left list-disc pl-8">
          {#each fContributions as project}
            <Hideable hide={project.hide}>
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
  {/if}

  {#if fInterests.length}
    <section>
      <Hideable>
        <h2 class="text-2xl print:text-[20pt] uppercase text-left">Interests</h2>
        <hr />

        <ul class="text-left list-disc pl-8">
          {#each fInterests as interest}
            <Hideable>
              <li>
                {interest.text}
              </li>
            </Hideable>
          {/each}
        </ul>
      </Hideable>
    </section>
  {/if}

  <footer class="print-only">
    (See <a href={fullVersionLink} target="_blank" rel="noopener">full version</a>
    or <a href={sourceLink} target="_blank" rel="noopener">source</a>)
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
