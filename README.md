# Topic Studio

A responsive random topic generator built with plain HTML, CSS, and JavaScript. No framework, dependencies, build step, or installation required.

## Run locally

Open `index.html` directly, or serve the directory (recommended for clipboard access):

```sh
python3 -m http.server 5500
```

Visit http://localhost:5500.

## Use Gemini

1. Create your own key at https://aistudio.google.com/apikey using a project on the free tier.
2. Click **Connect AI → Gemini**, paste the key, and choose an available model.
3. Click **Use Gemini**, select a category, purpose, depth, and optional interests, then generate.

The default is `gemini-3.5-flash-lite`, listed with free-tier text input/output in Google's pricing documentation when this project was created. Model access, regional availability, and quotas can change: https://ai.google.dev/gemini-api/docs/pricing. A free-tier key is required to stay within free-tier usage; the application cannot enforce Google's billing settings. You can change the model in connection settings without editing code.

Each click sends one compact request. Requests have a 35-second timeout and a five-second minimum interval. There are no automatic retries or automatic switches to paid models. Rate limits, invalid keys, unavailable models, safety blocks, malformed responses, and network errors receive readable messages. An unsuccessful request leaves the previous topic intact.

The key is held in JavaScript memory only and cleared on refresh or disconnect. It is sent directly to Google's API using the `x-goog-api-key` header, never included in a URL or saved in localStorage. This client-only integration is intended for a personal college project/demo with each user providing their own key. For public production use with a shared owner key, add a backend proxy and keep that key in a server environment variable. Never commit a real key.

## Features

- Seven category choices, including random across all categories.
- AI-generated topic plus plain-language explanation, three substantive talking points, everyday example, opening, and closing.
- Purpose and depth work in both modes; custom interests use the connected provider.
- Explicit offline mode with 18 curated topics, avoiding repeats until a category's library is exhausted. Purpose and depth adapt the offline starting prompts immediately; library titles stay curated.
- Browser-local saved topics (up to 100), reopening and removal.
- Copy topic, keyboard-accessible dialogs, visible focus, responsive layout, and reduced-motion support.
- No external fonts, icon libraries, trackers, or asset dependencies.

Saved topics are stored in localStorage on this browser/origin. Clearing browser data removes them. Connection settings never persist. Offline topics are labeled separately from Gemini results.

## Files

- `index.html`: semantic UI and dialogs.
- `styles.css`: responsive layout and visual design.
- `speaking-notes.js`: prepared speaking guides for all 18 offline topics.
- `app.js`: offline library, API requests, response validation, collection, clipboard, and UI state.

## API references

- https://ai.google.dev/api/generate-content
- https://ai.google.dev/gemini-api/docs/structured-output
- https://ai.google.dev/gemini-api/docs/api-key
- https://ai.google.dev/gemini-api/docs/pricing

## DeepSeek connection

Open **Connect AI → DeepSeek**, enter your DeepSeek API key, then click **Use DeepSeek**. Default model: `deepseek-flash`; the model field is editable. Get a key at https://platform.deepseek.com/api_keys. DeepSeek uses API account credits and is not presented as a free-tier alternative: https://api-docs.deepseek.com/quick_start/pricing/.

The Gemini and DeepSeek tabs keep separate key/model values in page memory. Selecting a tab edits that provider; clicking **Use Gemini** or **Use DeepSeek** makes it active. Simply switching tabs does not change the active generation provider. Refresh clears all keys. **Use offline library** clears both keys. Neither key is written to saved topics or browser storage.

DeepSeek requests use `POST https://api.deepseek.com/chat/completions`, Bearer authentication, JSON output, and non-thinking mode for compact responses. Response validation, timeout, pacing, and no automatic retries apply to both providers. Balance, authentication, quota, invalid output, and network failures keep the previous topic intact. Source labels identify the provider, including when reopening saved topics. There is no automatic provider fallback.

This remains a browser-only personal demo. Browser/API CORS restrictions may prevent a direct connection in some environments; use a backend proxy for that situation and for any shared production API key. Live provider access requires a valid key and available account quota/credits.

DeepSeek API references:
- https://api-docs.deepseek.com/
- https://api-docs.deepseek.com/guides/json_mode/
- https://api-docs.deepseek.com/quick_start/error_codes/

## Speak about a topic

Presentation is now the default format. Every newly generated topic includes a speaking guide: a simple explanation, three declarative points, an illustrative everyday example, and a sample speech assembled from an opening, the points, the example, and a closing. The speaking-time estimate uses the actual word count at roughly 110–150 words per minute; it is not a timer or a guarantee of duration. Copy the speech on its own, or copy the complete topic with its guide. Saved topics retain the guide and source provider.

Both providers generate the topic and guide in one request, with a 4096-token output limit and no follow-up call or automatic retry. AI results missing a valid guide are rejected without replacing the previous result. All 18 offline topics have topic-specific prepared notes; no provider request is needed. Offline format/depth selections adapt exploration questions, while the prepared speaking notes remain fixed and beginner-friendly.

Existing library saves receive their corresponding prepared notes when loaded. Older AI saves without guides remain accessible; connect a provider and click **Prepare speaking notes** to request a complete guide for the same title and category, then **Update saved topic** to retain it. No generic speech is substituted for an unrelated old topic.
