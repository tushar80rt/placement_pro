<script lang="ts">
  import {
    isAuthModalOpen,
    authModalMode,
    closeAuthModal,
    signInWithEmail,
    signUpWithEmail,
    signInWithGoogle,
    signInWithGithub,
    sendPasswordReset
  } from '$lib/stores/auth';
  import { X, Mail, Lock, User, ArrowRight, Loader2, Sparkles, CheckCircle2, AlertCircle } from 'lucide-svelte';

  let email = $state('');
  let password = $state('');
  let fullName = $state('');
  let loading = $state(false);
  let errorMessage = $state('');
  let successMessage = $state('');

  function resetForm() {
    errorMessage = '';
    successMessage = '';
  }

  function setMode(mode: 'signin' | 'signup' | 'forgot') {
    resetForm();
    authModalMode.set(mode);
  }

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    resetForm();
    loading = true;

    try {
      if ($authModalMode === 'signup') {
        if (!fullName.trim()) throw new Error('Please enter your full name');
        if (password.length < 6) throw new Error('Password must be at least 6 characters');
        await signUpWithEmail(email, password, fullName);
        successMessage = 'Account created successfully! Check your email if confirmation is required.';
        setTimeout(() => {
          closeAuthModal();
        }, 1200);
      } else if ($authModalMode === 'signin') {
        await signInWithEmail(email, password);
        successMessage = 'Welcome back! Logged in successfully.';
        setTimeout(() => {
          closeAuthModal();
        }, 800);
      } else if ($authModalMode === 'forgot') {
        await sendPasswordReset(email);
        successMessage = 'Password reset instructions have been sent to your email.';
      }
    } catch (err: any) {
      errorMessage = err?.message || 'Authentication failed. Please check your credentials.';
    } finally {
      loading = false;
    }
  }

  async function handleGoogleLogin() {
    resetForm();
    loading = true;
    try {
      await signInWithGoogle();
    } catch (err: any) {
      errorMessage = err?.message || 'Failed to sign in with Google.';
      loading = false;
    }
  }

  async function handleGithubLogin() {
    resetForm();
    loading = true;
    try {
      await signInWithGithub();
    } catch (err: any) {
      errorMessage = err?.message || 'Failed to sign in with GitHub.';
      loading = false;
    }
  }

  function handleDemoLogin() {
    resetForm();
    email = 'student.demo@placementpro.dev';
    password = 'demoPassword123!';
    fullName = 'Aarav Sharma';
    // Auto submit
    setTimeout(() => {
      handleSubmit(new SubmitEvent('submit'));
    }, 100);
  }
</script>

{#if $isAuthModalOpen}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
    role="dialog"
    aria-modal="true"
  >
    <!-- Modal Backdrop Click -->
    <div
      class="fixed inset-0"
      onclick={closeAuthModal}
      onkeydown={(e) => e.key === 'Escape' && closeAuthModal()}
      role="button"
      tabindex="-1"
      aria-label="Close modal overlay"
    ></div>

    <!-- Modal Card -->
    <div class="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-2xl transition-all">
      <!-- Close Button -->
      <button
        onclick={closeAuthModal}
        aria-label="Close"
        class="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
      >
        <X size={18} />
      </button>

      <!-- Brand / Logo Top -->
      <div class="flex items-center gap-2.5">
        <span class="grid h-8 w-8 place-items-center rounded-xl bg-slate-900 text-xs font-black text-white">P</span>
        <span class="text-base font-extrabold text-slate-900">Placement<span class="text-primary">Pro</span> Auth</span>
      </div>

      <!-- Header Title -->
      <div class="mt-4">
        {#if $authModalMode === 'signin'}
          <h2 class="text-2xl font-black text-slate-900">Welcome Back</h2>
          <p class="mt-1 text-xs text-slate-500">Sign in to sync your solved DSA problems, bookmarks & streaks.</p>
        {:else if $authModalMode === 'signup'}
          <h2 class="text-2xl font-black text-slate-900">Create Student Account</h2>
          <p class="mt-1 text-xs text-slate-500">Join 100,000+ candidates preparing for top tech placements.</p>
        {:else}
          <h2 class="text-2xl font-black text-slate-900">Reset Password</h2>
          <p class="mt-1 text-xs text-slate-500">Enter your registered email address to receive reset instructions.</p>
        {/if}
      </div>

      <!-- Quick OAuth Buttons -->
      {#if $authModalMode !== 'forgot'}
        <div class="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            onclick={handleGoogleLogin}
            disabled={loading}
            class="flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs font-bold text-slate-800 transition hover:bg-slate-100 disabled:opacity-50"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span>Google</span>
          </button>

          <button
            type="button"
            onclick={handleGithubLogin}
            disabled={loading}
            class="flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs font-bold text-slate-800 transition hover:bg-slate-100 disabled:opacity-50"
          >
            <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </button>
        </div>

        <div class="relative my-5 flex items-center justify-center">
          <div class="h-px w-full bg-slate-200"></div>
          <span class="absolute bg-white px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            or continue with email
          </span>
        </div>
      {/if}

      <!-- Error / Success Alerts -->
      {#if errorMessage}
        <div class="mb-4 flex items-center gap-2 rounded-xl bg-rose-50 border border-rose-200 p-3 text-xs font-semibold text-rose-700">
          <AlertCircle size={15} class="shrink-0 text-rose-600" />
          <span>{errorMessage}</span>
        </div>
      {/if}

      {#if successMessage}
        <div class="mb-4 flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-xs font-semibold text-emerald-700">
          <CheckCircle2 size={15} class="shrink-0 text-emerald-600" />
          <span>{successMessage}</span>
        </div>
      {/if}

      <!-- Email / Password Form -->
      <form onsubmit={handleSubmit} class="space-y-3.5">
        {#if $authModalMode === 'signup'}
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1" for="auth-name">Full Name</label>
            <div class="relative">
              <User size={16} class="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="auth-name"
                bind:value={fullName}
                type="text"
                placeholder="e.g. Rahul Sharma"
                required
                class="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-xs font-semibold text-slate-900 outline-none transition focus:border-primary focus:bg-white"
              />
            </div>
          </div>
        {/if}

        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1" for="auth-email">Email Address</label>
          <div class="relative">
            <Mail size={16} class="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="auth-email"
              bind:value={email}
              type="email"
              placeholder="name@college.edu or name@gmail.com"
              required
              class="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-xs font-semibold text-slate-900 outline-none transition focus:border-primary focus:bg-white"
            />
          </div>
        </div>

        {#if $authModalMode !== 'forgot'}
          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="text-xs font-bold text-slate-700" for="auth-pwd">Password</label>
              {#if $authModalMode === 'signin'}
                <button
                  type="button"
                  onclick={() => setMode('forgot')}
                  class="text-[11px] font-bold text-primary hover:underline"
                >
                  Forgot password?
                </button>
              {/if}
            </div>
            <div class="relative">
              <Lock size={16} class="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="auth-pwd"
                bind:value={password}
                type="password"
                placeholder="••••••••"
                required
                minlength="6"
                class="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-xs font-semibold text-slate-900 outline-none transition focus:border-primary focus:bg-white"
              />
            </div>
          </div>
        {/if}

        <!-- Submit Button -->
        <button
          type="submit"
          disabled={loading}
          class="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary text-xs font-black text-white shadow-md transition hover:bg-[#df5642] disabled:opacity-60"
        >
          {#if loading}
            <Loader2 size={16} class="animate-spin" />
            <span>Processing...</span>
          {:else if $authModalMode === 'signin'}
            <span>Sign In to Account</span>
            <ArrowRight size={15} />
          {:else if $authModalMode === 'signup'}
            <span>Create Free Account</span>
            <ArrowRight size={15} />
          {:else}
            <span>Send Reset Instructions</span>
            <ArrowRight size={15} />
          {/if}
        </button>
      </form>

      <!-- Bottom toggle link -->
      <div class="mt-5 border-t border-slate-100 pt-4 text-center text-xs font-medium text-slate-600">
        {#if $authModalMode === 'signin'}
          <span>Don't have an account? </span>
          <button onclick={() => setMode('signup')} class="font-bold text-primary hover:underline">Sign Up Free</button>
        {:else if $authModalMode === 'signup'}
          <span>Already have an account? </span>
          <button onclick={() => setMode('signin')} class="font-bold text-primary hover:underline">Sign In</button>
        {:else}
          <button onclick={() => setMode('signin')} class="font-bold text-primary hover:underline">Back to Sign In</button>
        {/if}
      </div>
    </div>
  </div>
{/if}
