<script lang="ts">
	import type { Hst as Histoire } from '@histoire/plugin-svelte'
	export let Hst: Histoire
</script>

<Hst.Story title="Cars">
	<Hst.Variant title="default">🚗</Hst.Variant>
	<Hst.Variant title="Fast">🏎️</Hst.Variant>
	<Hst.Variant title="Slow">🚜</Hst.Variant>
</Hst.Story>
