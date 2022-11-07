<script lang="ts">
	import { browser } from '$app/environment';

	import { pageTitle } from '$lib/stores';
	import { FY2021 as satisfactionData2021 } from '$lib/json/data.satisfaction.json';

	// let div = ['1', '2', '3', '4', '5', '6', '7', '8'];
	import '@fontsource/merriweather';
	import { Chart, registerables } from 'chart.js';
	import { onMount } from 'svelte';

	Chart.register(...registerables);

export let data: any;

	let barChartElement: HTMLCanvasElement;
	$: purchases = data.purchases;


	const chartData = {
		labels: satisfactionData2021.map(({ framework }) => framework),
		datasets: [
			{
				label: 'Satisfaction (%)',
				data: satisfactionData2021.map(({ score }) => score),
				backgroundColor: [
					'hsl(347 38% 49%)',
					'hsl(346 65% 63%)',
					'hsl(346 49% 56%)',
					'hsl(346 89% 70%)',
					'hsl(346 90% 76%)',
					'hsl(346 90% 73%)',
					'hsl(346 89% 79%)',
					'hsl(346 89% 85%)',
					'hsl(347 89% 82%)',
					'hsl(346 90% 88%)',
					'hsl(347 87% 94%)',
					'hsl(347 91% 91%)',
					'hsl(346 87% 97%)'
				],
				borderColor: ['hsl(43 100% 52%)'],
				borderRadius: 4,
				borderWidth: 2
			}
		]
	};

	onMount(() => {
		if (browser) {
			new Chart(barChartElement, {
				type: 'bar',
				data: chartData,
				options: {
					plugins: {
						legend: {
							display: false
						}
					},
					scales: {
						x: {
							grid: {
								color: 'hsl(43 100% 52% / 10%)'
							},
							ticks: { color: 'hsl(43 100% 52% )' }
						},
						y: {
							beginAtZero: false,
							ticks: { color: 'hsl(43 100% 52% )', font: { size: 18 } },
							grid: {
								color: 'hsl(43 100% 52% / 40%)'
							},
							title: {
								display: true,
								text: 'Satisfaction (%)',
								color: 'hsl(43 100% 52% )',
								font: { size: 24, family: 'Merriweather' }
							}
						}
					}
				}
			});
		}
	});

	$pageTitle = 'Dashboard';
</script>

<div class="grid space-x-4 space-y-4 sm:grid-cols-12">
	<div class="col-span-6">
		<canvas bind:this={barChartElement} />
	</div>
	<!-- {#each div as item}
		<div class="shaddow-md h-12 rounded-md bg-gray-400 sm:col-span-6">{item}</div>
	{/each} -->
</div>
