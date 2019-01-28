import { types } from 'mobx-state-tree';

export default types
  .model({
    page: 'sites',
    selectedSiteId: '',
  })
  .views(self => ({
    get currentUrl() {
      switch (self.page) {
        case 'sites':
          return '/';
        case 'new-site':
          return '/new-site';
        case 'site':
          return '/site/' + self.selectedSiteId;
        default:
          return '/404';
      }
    },
  }))
  .actions(self => ({
    openSitesPage() {
      self.page = 'sites';
      self.selectedSiteId = '';
    },
    openNewSitePage() {
      self.page = 'new-site';
      self.selectedSiteId = '';
    },
    openSitePage(site) {
      self.page = 'site';
      self.selectedSiteId = site.id;
    },
    openSitePageById(id) {
      self.page = 'site';
      self.selectedSiteId = id;
    },
  }));