<script lang="ts">
	export let formValues: any;

	let userAvatar: any;

	const onUserAvatarSelected = (event: any) => {
		// console.log('User Avatar selected:', event);
		const files = event?.target?.files;
		const filename = files[0]?.name;
		// console.log('filename:', filename);

		if (filename.lastIndexOf('.') <= 0) return alert('Invalid image format');

		const fileReader = new FileReader();

		fileReader.readAsDataURL(files[0]);

		fileReader.onload = (e: any) => {
			formValues.avatarUrl = e?.target?.result;
			// avatarPlaceholder = e?.target?.result;
			// console.log('avatarPlaceholder:', avatarPlaceholder);
		};
	};
</script>

<div class="sm:col-span-1">
	<div class="flex flex-col space-y-1">
		<label for="avatarUrl" class="text-xs">User Avatar</label>
		<input
			type="file"
			name="avatarUrl"
			id="avatarUrl"
			placeholder="User Avatar"
			class="hidden"
			on:change={(e) => onUserAvatarSelected(e)}
			bind:this={userAvatar}
			required
		/>
		<div
			class="h-full w-full cursor-pointer rounded-md border-2 border-slate-200 bg-slate-200"
			on:click={() => userAvatar.click()}
		>
			<img
				src={formValues.avatarUrl ? formValues.avatarUrl : '/images/add_image_placeholder.webp'}
				alt="product placeholder"
				class="h-64 w-full rounded-md object-contain"
			/>
		</div>
	</div>
</div>

<div class="grid gap-4 sm:col-span-2 sm:grid-cols-2">
	<div class="flex flex-col space-y-1">
		<label for="name" class="text-xs">Full Name</label>
		<input
			type="text"
			name="name"
			id="name"
			placeholder="User Name"
			bind:value={formValues.name}
			class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
			required
		/>
	</div>

	<div class="flex flex-col space-y-1">
		<label for="roleId" class="text-xs">User Role</label>
		<select
			name="roleId"
			id="roleId"
			class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
			bind:value={formValues.roleId}
			required
		>
			<option disabled selected value>--Select Animal Type--</option>
			{#if formValues.roles && formValues.roles.length}
				{#each formValues.roles as item}
					<option value={item.id}>{item.name}</option>
				{/each}
			{/if}
		</select>
	</div>

	<div class="flex flex-col space-y-1">
		<label for="email" class="text-xs">User email</label>
		<input
			type="email"
			name="email"
			id="email"
			placeholder="User email"
			bind:value={formValues.email}
			class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
			required
		/>
	</div>

	<div class="flex flex-col space-y-1">
		<label for="phoneNo" class="text-xs">User Phone No</label>
		<input
			type="tel"
			name="phoneNo"
			id="phoneNo"
			placeholder="User phoneNo"
			bind:value={formValues.phoneNo}
			class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
			required
		/>
	</div>

	<div class="flex flex-col space-y-1">
		<label for="password" class="text-xs">User Password</label>
		<input
			type="password"
			name="password"
			id="password"
			placeholder="User Password"
			bind:value={formValues.password}
			class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
			required
		/>
	</div>

	<div class="flex flex-col space-y-1">
		<label for="joinedAt" class="text-xs">User Join Date</label>
		<input
			type="date"
			name="joinedAt"
			id="joinedAt"
			placeholder="User Join Date"
			bind:value={formValues.joinedAt}
			class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
			required
		/>
	</div>
</div>
