interface MarketingCampaign {
  id: string;
  name: string;
  source?: string;
  medium?: string;
}

class MarketingTracker {
  private isEnabled = false;
  private campaigns: MarketingCampaign[] = [];

  enable() {
    this.isEnabled = true;
  }

  disable() {
    this.isEnabled = false;
  }

  trackCampaign(campaign: MarketingCampaign) {
    if (!this.isEnabled) {
      console.log("[Marketing] Blocked campaign:", campaign);
      return;
    }
    console.log("[Marketing] Campaign:", campaign);
    this.campaigns.push(campaign);
  }

  trackConversion(conversionType: string, value?: number) {
    if (!this.isEnabled) {
      console.log("[Marketing] Blocked conversion:", conversionType, value);
      return;
    }
    console.log("[Marketing] Conversion:", conversionType, value);
  }

  trackAdImpression(adId: string, adName: string) {
    if (!this.isEnabled) {
      console.log("[Marketing] Blocked ad impression:", adId, adName);
      return;
    }
    console.log("[Marketing] Ad impression:", adId, adName);
  }

  getCampaigns() {
    return this.campaigns;
  }

  clear() {
    this.campaigns = [];
  }
}

export const marketing = new MarketingTracker();

export function trackCampaign(
  id: string,
  name: string,
  source?: string,
  medium?: string
) {
  marketing.trackCampaign({ id, name, source, medium });
}

export function trackConversion(type: string, value?: number) {
  marketing.trackConversion(type, value);
}

export function trackAdImpression(adId: string, adName: string) {
  marketing.trackAdImpression(adId, adName);
}
