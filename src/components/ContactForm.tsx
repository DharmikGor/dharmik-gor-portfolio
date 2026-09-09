import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const projectTypes = [
  'Shopify Development',
  'Shopify Plus Development',
  'Shopify Theme Customization',
  'E-commerce Development',
  'WordPress Development',
  'Ongoing Development Support',
  'Other',
];

function encode(data: Record<string, string>): string {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    projectType: projectTypes[0],
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const next: Record<string, string> = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!values.email.trim()) {
      next.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (!values.message.trim()) next.message = 'Please add a short project message.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange =
    (field: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...values }),
      });
      if (!response.ok) throw new Error(`Form submission failed with status ${response.status}`);
      setStatus('success');
      setValues({ name: '', email: '', company: '', projectType: projectTypes[0], message: '' });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-2xl border border-emerald-300 bg-emerald-50 p-8 text-center"
      >
        <p className="font-display text-xl font-semibold text-emerald-800">Thanks! Your message has been sent.</p>
        <p className="mt-2 text-sm text-emerald-700">I'll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
    >
      {/* Required for Netlify's build-time form detection */}
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-stone-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent-500"
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-stone-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent-500"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-stone-700">
            Company <span className="text-stone-400 font-normal">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={handleChange('company')}
            className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent-500"
          />
        </div>

        <div>
          <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium text-stone-700">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={handleChange('projectType')}
            className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent-500"
          >
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-stone-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className="w-full resize-none rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent-500"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong sending your message. Please try again or email me directly.
        </p>
      )}

      <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full sm:w-auto">
        {status === 'submitting' ? 'Sending…' : "Let's Talk →"}
      </button>
    </form>
  );
}
