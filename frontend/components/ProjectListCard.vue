<script setup lang="ts">
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";
import { useTranscriptionStore } from "@/store/useUserTranscriptions";

const store = useTranscriptionStore();
const { transcriptions } = storeToRefs(store);

const allTranscriptions = computed(() => {
  return transcriptions.value.map((transcription) => ({
    name: transcription.transcription_name,
    date: new Date(transcription.createdAt).toLocaleDateString(),
    text: transcription.text,
  }));
});

const currentPage = ref(1);
const itemsPerPage = 10;

const totalPages = computed(() =>
  Math.ceil(allTranscriptions.value.length / itemsPerPage)
);

const paginatedTranscriptions = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return allTranscriptions.value.slice(start, start + itemsPerPage);
});

function downloadTxt(projectName: string, text: string) {
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${projectName}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
</script>

<template>
  <div class="card z-depth-3">
    <div class="card-content">
      <span class="card-title"> Your Transcriptions </span>

      <ul class="collection">
        <li
          v-for="(transcription, index) in paginatedTranscriptions"
          :key="index"
          class="collection-item"
        >
          <div style="display: flex; flex-direction: column">
            <strong>{{ transcription.name }}</strong>
            <small>{{ transcription.date }}</small>

            <button
              class="btn blue"
              @click="downloadTxt(transcription.name, transcription.text || '')"
              style="margin-top: 5px"
            >
              Download .txt
            </button>
          </div>
        </li>
      </ul>
    </div>

    <div class="card-action center-align">
      <button
        class="btn-flat"
        :disabled="currentPage === 1"
        @click="currentPage--"
      >
        <Icon name="mdi:chevron-left" />
      </button>

      <span>Page {{ currentPage }} of {{ totalPages }}</span>

      <button
        class="btn-flat"
        :disabled="currentPage === totalPages"
        @click="currentPage++"
      >
        <Icon name="mdi:chevron-right" />
      </button>
    </div>
  </div>
</template>
