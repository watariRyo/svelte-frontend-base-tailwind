import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom/vitest';
import AboutPage from '../../lib/components/pages/abount/AboutPage.svelte';

const screenLoaded = () => {
	cleanup();
	render(AboutPage);
};

describe('about', () => {
	beforeEach(() => {
		screenLoaded();
	});
	it('about sample', async () => {
		const aboutText = await screen.findByText('About');
		expect(aboutText).toBeInTheDocument();
	});
});
